import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  WebLyricsViewModule,
  LyricsComponent,
} from '@artur-ba/web/lyrics/view';

import { DashboardComponent } from './dashboard/dashboard.component';

const ROUTES = [{ path: '', component: LyricsComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES), WebLyricsViewModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class WebSpotifyDashboardViewModule {}
