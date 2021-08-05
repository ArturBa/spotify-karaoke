import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-player-device',
  templateUrl: './player-device.component.html',
  styleUrls: ['./player-device.component.scss'],
  host: {
    '(click)': 'onClick()',
  },
})
export class PlayerDeviceComponent {
  @Input() device: SpotifyApi.UserDevice;
  @Output() update = new EventEmitter();

  constructor(protected readonly spotifyPlayer: SpotifyPlayerService) {}

  onClick(): void {
    this.selectAsCurrentDevice();
  }

  protected async selectAsCurrentDevice(): Promise<void> {
    await this.spotifyPlayer.setCurrentDevice(this.device.id);
    this.update.emit();
  }
}
