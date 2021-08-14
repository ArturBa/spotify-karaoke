import { Component, HostListener, Input } from '@angular/core';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent {
  @Input() context_uri: string;

  @HostListener('click') onPlayClick() {
    this.spotifyPlayer.playContext(this.context_uri);
  }

  constructor(protected readonly spotifyPlayer: SpotifyPlayerService) {}
}
