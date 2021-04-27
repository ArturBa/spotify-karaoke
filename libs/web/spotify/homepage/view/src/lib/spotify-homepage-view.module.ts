import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { WebSpotifyDashboardViewModule } from '@artur-ba/web/spotify/dashboard/view';
import { WebSpotifyPlayerViewModule } from '@artur-ba/web/spotify/player/view';
import { WebSpotifySidebarViewModule } from '@artur-ba/web/spotify/sidebar/view';

import { HomepageComponent } from './homepage/homepage.component';
import { WebSpotifyHomepageViewRoutingModule } from './spotify-homepage-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WebSpotifyDashboardViewModule,
    WebSpotifyPlayerViewModule,
    WebSpotifySidebarViewModule,
    WebSpotifyHomepageViewRoutingModule,
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
})
export class WebSpotifyHomepageViewModule {}
