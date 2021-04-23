import { Component } from '@angular/core';
import { PlayerControlService, PlayerStore } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.scss'],
})
export class PlayerSettingsComponent {
  readonly loud = 50;
  volume = 0;

  constructor(
    protected playerStore: PlayerStore,
    protected playerControlService: PlayerControlService
  ) {
    this.playerStore.volume$.subscribe((volume) => {
      this.volume = volume;
    });
  }

  handleVolumeChange(event: number | null): void {
    if (!event) {
      return;
    }
    this.setVolume(event);
  }

  isLoud(): boolean {
    return this.volume >= this.loud;
  }

  isMute(): boolean {
    return this.volume === 0;
  }

  setVolume(volume: number): void {
    this.playerControlService.setVolume(volume);
  }
}
