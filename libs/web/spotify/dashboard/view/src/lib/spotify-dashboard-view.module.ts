import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebLyricsViewModule } from '@artur-ba/web/lyrics/view';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QueueComponent } from './queue/queue.component';

const ROUTES = [
  { path: '', component: QueueComponent },
  { path: 'queue', component: QueueComponent },
  {
    path: 'lyrics',
    loadChildren: () =>
      import('@artur-ba/web/lyrics/view').then((m) => m.WebLyricsViewModule),
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES), WebLyricsViewModule],
  declarations: [DashboardComponent, QueueComponent],
  exports: [DashboardComponent],
})
export class WebSpotifyDashboardViewModule {}
