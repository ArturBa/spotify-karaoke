import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { SpotifyAuthorize } from './models/spotify-authorize';
import { EnvSettingsService } from './env-settings.service';

export interface AuthState {
  accessToken: string | null;
  tokenType: string | null;
  expiresIn: number;
  state: string | null;
}

export interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected http: HttpClient,
    protected env: EnvSettingsService
  ) {}

  access_token_sub$ = new BehaviorSubject(this.access_token);
  protected readonly tokenUrl = 'https://accounts.spotify.com/api/token';

  protected saveTokenData(token: SpotifyTokenResponse): void {
    Object.keys(token).forEach((key) => {
      localStorage.setItem(key, token[key]);
    });
    this.access_token_sub$.next(token.access_token);
  }

  get access_token(): string {
    return localStorage.getItem('access_token');
  }

  get refresh_token(): string {
    return localStorage.getItem('refresh_token');
  }

  protected set returnUrl(returnUrl: string) {
    localStorage.setItem('returnUrl', returnUrl);
  }

  protected get returnUrl(): string {
    const return_url = localStorage.getItem('returnUrl');
    localStorage.removeItem('returnUrl');
    return return_url;
  }

  protected get headers(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded;')
      .set(
        'Authorization',
        `Basic ${btoa(
          this.env.spotify_client_id + ':' + this.env.spotify_client_secret
        )}`
      );
  }

  async generateJWT(code: string): Promise<void> {
    const params = new HttpParams().appendAll({
      grant_type: 'authorization_code',
      code: encodeURIComponent(code),
      redirect_uri: `${window.location.origin}/spotify/`,
    });
    const token = await this.http
      .post<SpotifyTokenResponse>(this.tokenUrl, params.toString(), {
        headers: this.headers,
      })
      .toPromise();
    this.saveTokenData(token);
    this.router.navigate([this.returnUrl]);
  }

  async authorize() {
    const spotifyAuthorize = new SpotifyAuthorize();
    const url = spotifyAuthorize.createAuthorizeURL(this.env.spotify_client_id);

    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.returnUrl = params['returnUrl'] || '';
      window.location.href = url;
    });
  }

  async refreshToken(): Promise<void> {
    const params = new HttpParams().appendAll({
      grant_type: 'refresh_token',
    });
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded;')
      .set(
        'Authorization',
        `Basic ${btoa(
          this.env.spotify_client_id + ':' + this.env.spotify_client_secret
        )}`
      );
    this.access_token_sub$.next(null);
    const token = await this.http
      .post<SpotifyTokenResponse>(this.tokenUrl, params.toString(), {
        headers: this.headers,
      })
      .toPromise();
    this.saveTokenData(token);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  isLogged(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
