import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MiniLyricsService } from '@artur-ba/web/lyrics/mini-lyrics/service';
import { PlayerStore } from '@artur-ba/shared/service';
import { Lyrics, LyricsParser, LyricsScript } from '@artur-ba/web/lyrics/model';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'artur-ba-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit {
  lyrics: Lyrics;
  author: string;
  title: string;
  progress: Observable<number>;

  constructor(
    protected lyricsAPI: MiniLyricsService,
    protected playerState: PlayerStore
  ) {}

  async ngOnInit(): Promise<void> {
    this.playerState.currentTrack$.subscribe(async (track) => {
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
    this.lyrics = LyricsParser.lrcParser(
      await this.lyricsAPI.getLyrics(this.title, this.author)
    );
  }
}
