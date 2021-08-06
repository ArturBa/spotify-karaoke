import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPlaylistComponent } from './user-playlist/user-playlist.component';
import { PlaylistRowComponent } from './playlist-row/playlist-row.component';
import { PlaylistInfinitiveListComponent } from './playlist-infinitive-list/playlist-infinitive-list.component';

const exports = [UserPlaylistComponent];

@NgModule({
  declarations: [
    ...exports,
    PlaylistRowComponent,
    PlaylistInfinitiveListComponent,
  ],
  imports: [CommonModule],
  exports,
})
export class UserPlaylistModule {}
