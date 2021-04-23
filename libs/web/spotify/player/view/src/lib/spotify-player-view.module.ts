import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player/player.component';
import { PlayerSongComponent } from './player-song/player-song.component';
import { PlayerControlComponent } from './player-control/player-control.component';
import { PlayerSettingsComponent } from './player-settings/player-settings.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PlayerComponent,
    PlayerSongComponent,
    PlayerControlComponent,
    PlayerSettingsComponent,
  ],
  exports: [PlayerComponent],
})
export class WebSpotifyPlayerViewModule {}
