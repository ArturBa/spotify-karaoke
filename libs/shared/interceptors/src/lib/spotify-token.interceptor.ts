import { Injectable } from '@angular/core';

import { catchError, filter, switchMap } from 'rxjs/operators';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { AuthStore } from '@artur-ba/shared/service';

export const spotifyAPIRegex = /^https:\/\/api\.spotify\.com/;

@Injectable()
export class SpotifyTokenInterceptor implements HttpInterceptor {
  protected refreshingInProgress = false;

  constructor(protected authStore: AuthStore, protected router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (!spotifyAPIRegex.test(request.url)) {
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
      }),
    );
  }

  protected addAuthorizationHeader(
    request: HttpRequest<any>,
  ): HttpRequest<any> {
    request = request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer ' + this.authStore.access_token,
      ),
    });
    return request;
  }

  protected logoutAndRedirect(err): Observable<HttpEvent<unknown>> {
    this.authStore.logout();
    this.router.navigateByUrl('/login');
    return throwError(err);
  }

  protected refreshToken(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (!this.refreshingInProgress) {
      this.refreshingInProgress = true;
      this.authStore.refreshToken().then(() => {
        this.refreshingInProgress = false;
      });
    }
    return this.authStore.access_token_sub$.pipe(
      filter((token) => token !== null),
      switchMap(() => {
        return next.handle(this.addAuthorizationHeader(request));
      }),
    );
  }
}
