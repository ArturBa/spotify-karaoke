import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { SpotifyTokenInterceptor } from '@artur-ba/shared/interceptors';
import { WebSpotifyHomepageViewModule } from '@artur-ba/web/spotify/homepage/view';

import { AppComponent } from './app.component';
import {
  QueueComponent,
  DashboardComponent,
} from '@artur-ba/web/spotify/dashboard/view';

const ROUTES: Routes = [
  {
    path: 'lyrics',
    loadChildren: () =>
      import('@artur-ba/web/lyrics/view').then((m) => m.WebLyricsViewModule),
  },
  { path: '', component: DashboardComponent },
  { path: 'queue', component: QueueComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    WebSpotifyHomepageViewModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyTokenInterceptor,
      multi: true,
    },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
