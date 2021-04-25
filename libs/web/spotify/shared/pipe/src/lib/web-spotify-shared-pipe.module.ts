import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TrackTime } from './track-time.pipe';
import { AddComaPipe } from './add-coma.pipe';
import { ClearUriDataPipe } from './clear-uri-data.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TrackTime, AddComaPipe, ClearUriDataPipe],
  exports: [TrackTime, AddComaPipe, ClearUriDataPipe],
})
export class WebSpotifySharedPipeModule {}
