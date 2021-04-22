import { Injectable } from '@angular/core';

import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { StateInterface } from './state-interface';

export interface PlayerState {
  player: Spotify.SpotifyPlayer;
  deviceId: string;
  playbackState: Spotify.PlaybackState;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerState extends StateInterface<PlayerState> {
  readonly playback$ = this.state$?.pipe(
    filter((d) => !!d.playbackState),
    map((d) => d.playbackState)
  ) as Observable<Spotify.PlaybackState>;

  readonly currentTrack$ = this.playback$.pipe(
    filter((p) => !!p),
    map((p) => p.track_window.current_track)
  ) as Observable<Spotify.Track>;
}
