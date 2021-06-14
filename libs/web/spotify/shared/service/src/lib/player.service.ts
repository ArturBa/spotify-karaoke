import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { tap } from 'rxjs/operators';

import { AuthStore, PlayerStore } from '@artur-ba/shared/service';

import { PlayerControlService } from './player-control.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService implements OnDestroy {
  constructor(
    protected playerState: PlayerStore,
    protected authStore: AuthStore,
    protected playerControl: PlayerControlService
  ) {}

  protected subscriptions: Subscription[] = [];

  init(): void {
    this.subscriptions.push(
      this.authStore.access_token_sub$
        .pipe(
          tap((token) => {
            this.initSpotify(token);
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  protected async initSpotify(token): Promise<void> {
    const { Player } = await this.waitForSpotifyWebPlaybackSDKToLoad();
    const player = new Player({
      name: 'Spotify Karaoke',
      getOAuthToken: (cb) => {
        cb(token);
      },
    });

    player.addListener('initialization_error', ({ message }) => {
      return Promise.reject(new Error(message));
    });
    player.addListener('authentication_error', ({ message }) => {
      return Promise.reject(new Error(message));
    });
    player.addListener('account_error', ({ message }) => {
      return Promise.reject(new Error(message));
    });
    player.addListener('playback_error', ({ message }) => {
      return Promise.reject(new Error(message));
    });

    // Playback status updates
    player.addListener(
      'player_state_changed',
      async (state: Spotify.PlaybackState) => {
        this.playerState.setState({
          playbackState: state,
          volume: await player.getVolume(),
        });
      }
    );

    // Ready
    player.addListener('ready', ({ device_id }) => {
      this.playerState.setState({ deviceId: device_id });
      this.playerControl.transferUserPlayback(device_id, false);
    });

    player.addListener('not_ready', ({ device_id }) => {
      return Promise.reject(
        new Error(`Device ID: ${device_id} has gone offline`)
      );
    });

    // Connect to the player!
    await player.connect();
    this.playerState.setState({ player });
  }

  protected waitForSpotifyWebPlaybackSDKToLoad(): Promise<typeof Spotify> {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    window.onSpotifyWebPlaybackSDKReady = () => {};

    return new Promise((resolve) => {
      if (window.Spotify) {
        resolve(window.Spotify);
      } else {
        window.onSpotifyWebPlaybackSDKReady = () => {
          resolve(window.Spotify);
        };
      }
    });
  }
}
