import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { WebLyricsMiniLyricsServiceModule } from '@artur-ba/web/lyrics/mini-lyrics/service';

import { LyricsComponent } from './lyrics/lyrics.component';
import { LyricsTextComponent } from './lyrics-text/lyrics-text.component';
import { RouterModule } from '@angular/router';

const ROUTES = [{ path: '', component: LyricsComponent }];
@NgModule({
  imports: [
    CommonModule,
    WebLyricsMiniLyricsServiceModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [LyricsComponent, LyricsTextComponent],
  exports: [],
})
export class WebLyricsViewModule {}
