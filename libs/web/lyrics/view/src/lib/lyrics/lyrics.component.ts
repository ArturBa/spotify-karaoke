import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MiniLyricsService } from '@artur-ba/web/lyrics/mini-lyrics/service';
import { PlayerState } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit {
  lyrics: string;
  author: string;
  title: string;
  progress: Observable<number>;
  track: Spotify.Track;

  constructor(
    protected lyricsAPI: MiniLyricsService,
    protected playerState: PlayerState
  ) {}

  async ngOnInit(): Promise<void> {
    this.playerState.currentTrack$.subscribe(async (track) => {
      this.track = track;
      this.handleSongUpdate(track);
    });
    this.playerState.progress$.subscribe((pos) => {
      this.progress = pos;
    });
  }

  protected async handleSongUpdate(track: Spotify.Track): Promise<void> {
    this.author = track.artists[0].name;
    this.title = track.name;
    this.updateLyrics();
  }

  protected async updateLyrics(): Promise<void> {
    this.lyrics = await this.lyricsAPI.getLyrics(this.title, this.author);
  }
}
