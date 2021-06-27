import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedServiceModule } from '@artur-ba/shared/service';
import { SharedViewModule } from '@artur-ba/shared/view';
import { WebSpotifyPlayerViewModule } from '@artur-ba/web/spotify/player/view';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';
import { WebSpotifySharedViewModule } from '@artur-ba/web/spotify/shared/view';
import { WebSpotifySidebarViewModule } from '@artur-ba/web/spotify/sidebar/view';

import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QueueComponent } from './queue/queue.component';
import { WebSpotifyHomepageViewRoutingModule } from './spotify-homepage-view-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    WebSpotifySharedViewModule,
    WebSpotifyHomepageViewRoutingModule,
    WebSpotifyPlayerViewModule,
    WebSpotifySidebarViewModule,
    WebSpotifySharedPipeModule,
    SharedViewModule,
    SharedServiceModule,
  ],
  declarations: [
    HomepageComponent,
    DashboardComponent,
    QueueComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
  ],
  exports: [HomepageComponent],
})
export class WebSpotifyHomepageViewModule {}
