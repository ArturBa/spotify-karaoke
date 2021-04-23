import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { WebLyricsMiniLyricsServiceModule } from '@artur-ba/web/lyrics/mini-lyrics/service';

import { LyricsComponent } from './lyrics/lyrics.component';
import { LyricsTextComponent } from './lyrics-text/lyrics-text.component';

@NgModule({
  imports: [CommonModule, WebLyricsMiniLyricsServiceModule],
  declarations: [LyricsComponent, LyricsTextComponent],
  exports: [LyricsComponent],
})
export class WebLyricsViewModule {}
