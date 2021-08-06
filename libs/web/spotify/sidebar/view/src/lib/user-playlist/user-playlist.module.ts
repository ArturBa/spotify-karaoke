import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPlaylistComponent } from './user-playlist/user-playlist.component';

const exports = [UserPlaylistComponent];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule],
  exports,
})
export class UserPlaylistModule {}
