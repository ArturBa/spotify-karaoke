import { Component, HostBinding, HostListener, Input } from '@angular/core';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

export enum PlayButtonStyle {
  SQUARE = 'square',
  ROUND = 'round',
  ICON = 'icon',
}

@Component({
  selector: 'artur-ba-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent {
  @Input() context: SpotifyApi.PlayParameterObject;
  @Input() style = PlayButtonStyle.SQUARE;

  readonly PlayButtonStyle = PlayButtonStyle;

  @HostListener('click', ['$event']) onPlayClick($event: MouseEvent) {
    $event?.stopPropagation();
    this.context && this.spotifyPlayer.play(this.context);
  }

  constructor(protected readonly spotifyPlayer: SpotifyPlayerService) {}
}
