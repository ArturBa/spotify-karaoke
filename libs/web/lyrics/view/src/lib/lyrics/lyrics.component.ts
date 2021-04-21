import { Component, OnInit } from '@angular/core';

import { MiniLyricsService } from 'libs/web/lyrics/mini-lyrics/service/src/lib/mini-lyrics.service';
// import { MiniLyricsService } from '@artur-ba/web/lyrics/mini-lyrics/service/src/lib/mini-lyrics.service';

@Component({
  selector: 'artur-ba-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit {
  constructor(protected lyricsAPI: MiniLyricsService) {}

  ngOnInit(): void {
    this.lyricsAPI.getLyrics('hound dog', 'elvis presley').subscribe(() => {});
  }
}
