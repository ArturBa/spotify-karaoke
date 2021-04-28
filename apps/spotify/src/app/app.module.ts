import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

import { SharedViewModule } from '@artur-ba/shared/view';
import { SpotifyTokenInterceptor } from '@artur-ba/shared/interceptors';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    SharedViewModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
