import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { WebSpotifyHomepageViewModule } from '@artur-ba/web/spotify/homepage/view';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
    WebSpotifyHomepageViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
