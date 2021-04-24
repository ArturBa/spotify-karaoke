import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { WebLyricsViewModule } from '@artur-ba/web/lyrics/view';
import { WebSpotifySharedViewModule } from '@artur-ba/web/spotify/shared/view';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QueueComponent } from './queue/queue.component';

@NgModule({
  imports: [CommonModule, WebLyricsViewModule, WebSpotifySharedViewModule],
  declarations: [DashboardComponent, QueueComponent],
  exports: [DashboardComponent, QueueComponent],
})
export class WebSpotifyDashboardViewModule {}
