import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-player-device',
  templateUrl: './player-device.component.html',
  styleUrls: ['./player-device.component.scss'],
})
export class PlayerDeviceComponent {
  @Input() device: SpotifyApi.UserDevice;
  @Output() update = new EventEmitter();

  @HostListener('click') onClick() {
    this.selectAsCurrentDevice();
  }

  constructor(protected readonly spotifyPlayer: SpotifyPlayerService) {}

  protected async selectAsCurrentDevice(): Promise<void> {
    await this.spotifyPlayer.setCurrentDevice(this.device.id);
    this.update.emit();
  }
}
