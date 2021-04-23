import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SpotifyHomepageViewModule } from '@artur-ba/spotify/homepage/view';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SpotifyHomepageViewModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
