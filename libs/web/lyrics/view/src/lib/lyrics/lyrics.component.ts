import { Component, Input, OnInit } from '@angular/core';
import { MinilyricsResponse } from '@artur-ba/web/lyrics/mini-lyrics/interface';

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
    this.lyricsAPI.getLyrics0('hound dog', 'elvis presley').subscribe((res) => {
      res.subscribe((r) => console.log(r));
    });
  }
}
