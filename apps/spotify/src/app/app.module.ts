import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { SharedServiceModule } from '@artur-ba/shared/service';
import { WebLyricsViewModule } from '@artur-ba/web/lyrics/view';

import { WebSpotifyHomepageViewModule } from '@artur-ba/web/spotify/homepage/view';
import { SpotifyTokenInterceptor } from '@artur-ba/shared/interceptors';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
    WebSpotifyHomepageViewModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
