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
    this.httpClient.put(`${this.playerURL}/play`, {}).subscribe();
  }

  pause(): void {
    this.httpClient.put(`${this.playerURL}/pause`, {}).subscribe();
  }

  nextTrack(): void {
    this.httpClient.put(`${this.playerURL}/next`, {}).subscribe();
  }

  prevTrack(): void {
    this.httpClient.put(`${this.playerURL}/previous`, {}).subscribe();
  }
}
