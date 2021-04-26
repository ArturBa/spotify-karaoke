import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

import { WebLyricsViewModule } from '@artur-ba/web/lyrics/view';
import { WebSpotifySharedViewModule } from '@artur-ba/web/spotify/shared/view';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QueueComponent } from './queue/queue.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  imports: [
    CommonModule,
    WebLyricsViewModule,
    WebSpotifySharedViewModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  declarations: [DashboardComponent, QueueComponent, AlbumComponent],
  exports: [DashboardComponent, QueueComponent, AlbumComponent],
})
export class WebSpotifyViewModule {}
