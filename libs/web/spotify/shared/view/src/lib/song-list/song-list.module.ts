import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ImageModule } from '../image/image.module';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { SongListComponent } from './song-list/song-list.component';
import { SongRowComponent } from './song-row/song-row.component';

const exports = [SongListComponent];

@NgModule({
  declarations: [...exports, SongRowComponent],
  imports: [CommonModule, ImageModule, WebSpotifySharedPipeModule],
  exports,
})
export class SongListModule {}
