import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';

import { spotifyAPIRegex } from './spotify-token.interceptor';

export const ipAPIRegex = /^http:\/\/ip\-api\.com\/json$/;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  protected readonly snackbarConfig: MatSnackBarConfig = {
    duration: 2500,
    panelClass: 'error-snackbar',
  };

  protected readonly dismissMessage = $localize`:error-interceptor.dismiss:Dismiss`;

  constructor(protected readonly snackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (spotifyAPIRegex.test(error.url) && error.status !== 401) {
          this.handleSpotifyError(error);
        } else if (ipAPIRegex.test(error.url)) {
          this.handleLocationError(error);
        }
        return throwError(error.message);
      }),
    );
  }

  protected handleSpotifyError(error: any): void {
    this.snackBar.open(
      error.error.error.message,
      this.dismissMessage,
      this.snackbarConfig,
    );
  }

  protected handleLocationError(error: any): void {
    this.snackBar.open(error.message, this.dismissMessage, this.snackbarConfig);
  }
}
