import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { of, Subscription, throwError } from 'rxjs';

import { AuthStore } from '@artur-ba/shared/service';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
  selector: 'artur-ba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    protected authStore: AuthStore,
    protected route: ActivatedRoute
  ) {}
  protected subscriptions: Subscription[] = [];

  error: Error;

  ngOnInit(): void {
    if (this.route.snapshot.data['spotify_callback']) {
      this.handleSpotifyCallback();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  protected handleSpotifyCallback(): void {
    this.subscriptions.push(
      this.route.queryParams
        .pipe(
          map((params) => {
            if (params['error']) {
              throw new Error(params['error']);
            }
            return params['code'];
          }),
          tap((code) => {
            return this.authStore.generateJWT(code);
          }),
          retry(3),
          catchError((error) => {
            console.log(error);
            this.error = error;
            return of(null);
          })
        )
        .subscribe()
    );
  }

  auth(): void {
    this.authStore.authorize();
  }
}
