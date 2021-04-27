import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {
  DashboardComponent,
  QueueComponent,
} from '@artur-ba/web/spotify/dashboard/view';
import { HomepageComponent } from './homepage/homepage.component';

export const HOMEPAGE_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: 'lyrics',
        loadChildren: () =>
          import('@artur-ba/web/lyrics/view').then(
            (m) => m.WebLyricsViewModule
          ),
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'queue', component: QueueComponent },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(HOMEPAGE_ROUTES)],
  exports: [RouterModule],
})
export class WebSpotifyHomepageViewRoutingModule {}
