import { Component } from '@angular/core';

import { PlayerStore } from '@artur-ba/shared/service';
import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';
@Component({
  selector: 'artur-ba-player-song',
  templateUrl: './player-song.component.html',
  styleUrls: ['./player-song.component.scss'],
})
export class PlayerSongComponent {
  track: Spotify.Track;

  constructor(protected playerStore: PlayerStore) {
    this.playerStore.currentTrack$.subscribe((track) => {
      if (this.track !== track) {
        this.track = track;
      }
    });
  }

  get image64Url(): string {
    return TrackHelper.getImage64Url(this.track);
  }

  get artists(): string {
    return TrackHelper.getArtists(this.track);
  }
}
