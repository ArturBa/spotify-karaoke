import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { WebLyricsViewModule } from '@artur-ba/web/lyrics/view';
import { WebSpotifySharedViewModule } from '@artur-ba/web/spotify/shared/view';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QueueComponent } from './queue/queue.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
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
  declarations: [DashboardComponent, QueueComponent],
  exports: [DashboardComponent, QueueComponent],
})
export class WebSpotifyDashboardViewModule {}
