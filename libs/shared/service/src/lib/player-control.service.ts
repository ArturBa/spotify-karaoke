import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlayerStore } from './player.store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface SpotifyPlayRequestApi {
  context_uri?: string;
  uris?: string[];
  offset?: { position: number };
}

@Injectable({
  providedIn: 'root',
})
export class PlayerControlService {
  protected player$: Spotify.SpotifyPlayer;
  protected readonly baseURL = 'https://api.spotify.com/v1';
  protected readonly playerURL = this.baseURL + '/me/player';

  constructor(
    protected httpClient: HttpClient,
    protected playerStore: PlayerStore
  ) {
    this.playerStore.state$.subscribe((state) => {
      this.player$ = state.player;
    });
  }

  transferUserPlayback(
    deviceId: string,
    play: boolean = true
  ): Observable<any> {
    return this.httpClient.put(this.playerURL, {
      device_ids: [deviceId],
      play,
    });
  }

  play(): void {
    const request = {} as SpotifyPlayRequestApi;
    this.playerStore.currentTrack$.pipe(
      map((t) => t.uri),
      tap((uri) => {
        this.httpClient.put(`${this.baseURL}/play`, { context_uri: uri });
      })
    );
    this.player$?.togglePlay();
  }

  pause(): void {
    this.player$?.pause();
  }

  nextTrack(): void {
    this.player$?.nextTrack();
  }

  prevTrack(): void {
    this.player$?.previousTrack();
  }
}
