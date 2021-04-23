import { Injectable } from '@angular/core';
import { PlayerStore } from './player.store';

@Injectable({
  providedIn: 'root',
})
export class PlayerControlService {
  protected player$: Spotify.SpotifyPlayer;

  constructor(protected playerStore: PlayerStore) {
    this.playerStore.state$.subscribe((state) => {
      this.player$ = state.player;
    });
  }

  play(): void {
    this.player$?.resume();
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
