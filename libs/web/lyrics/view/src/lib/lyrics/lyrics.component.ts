import { Component, OnInit } from '@angular/core';

import { MiniLyricsService } from '@artur-ba/web/lyrics/mini-lyrics/service';
import { PlayerState } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit {
  lyrics: string;

  constructor(
    protected lyricsAPI: MiniLyricsService,
    protected playerState: PlayerState
  ) {}

  async ngOnInit(): Promise<void> {
    this.playerState.currentTrack$.subscribe(async (track: Spotify.Track) => {
      const author = track.artists[0].name;
      const title = track.name;
      this.lyrics = await this.lyricsAPI.getLyrics(title, author);
    });
  }
}
