import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotifyDashboardViewModule } from '@artur-ba/spotify/dashboard/view';
import { SpotifyPlayerViewModule } from '@artur-ba/spotify/player/view';
import { SpotifySidebarViewModule } from '@artur-ba/spotify/sidebar/view';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    CommonModule,
    SpotifyDashboardViewModule,
    SpotifyPlayerViewModule,
    SpotifySidebarViewModule,
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
})
export class SpotifyHomepageViewModule {}
