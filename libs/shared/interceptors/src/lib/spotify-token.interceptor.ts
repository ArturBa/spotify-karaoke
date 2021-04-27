import { Injectable } from '@angular/core';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { from, Observable, pipe, throwError } from 'rxjs';

import { AuthStore } from '@artur-ba/shared/service';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class SpotifyTokenInterceptor implements HttpInterceptor {
  protected readonly spotifyAPIRegex = new RegExp('^https://api.spotify.com/');

  constructor(protected authStore: AuthStore, protected router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.spotifyAPIRegex.test(request.url)) {
      return next.handle(request);
    }
    return next.handle(this.addAuthorizationHeader(request)).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          if (this.authStore.access_token && this.authStore.refresh_token) {
            return this.refreshToken(request, next);
          }
          return this.logoutAndRedirect(err);
        }

        if (err instanceof HttpErrorResponse && err.status === 403) {
          return this.logoutAndRedirect(err);
        }

        return throwError(err);
      })
    );
  }

  protected addAuthorizationHeader(
    request: HttpRequest<any>
  ): HttpRequest<any> {
    request = request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer ' + this.authStore.access_token
      ),
    });
    return request;
  }

  protected logoutAndRedirect(err): Observable<HttpEvent<unknown>> {
    this.authStore.logout();
    this.router.navigateByUrl('/login');
    return throwError(err);
  }
  protected refreshingInProgress = false;

  protected refreshToken(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.refreshingInProgress) {
      this.refreshingInProgress = true;

      return from(this.authStore.refreshToken()).pipe(
        switchMap(() => {
          this.refreshingInProgress = true;
          return next.handle(this.addAuthorizationHeader(request));
        })
      );
    } else {
      // wait while getting new token
      return this.authStore.access_token_sub$.pipe(
        filter((token) => token !== null),
        switchMap((token) => {
          return next.handle(this.addAuthorizationHeader(request));
        })
      );
    }
  }
}
