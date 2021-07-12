import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { CardModule } from './card/card.module';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { InfinitiveScrollModule } from './infinitive-scroll/infinitive-scroll.module';
import { SongListModule } from './song-list/song-list.module';

const exportModules = [CardModule, InfinitiveScrollModule, SongListModule];
@NgModule({
  imports: [
    ...exportModules,
    MatIconModule,
    MatMenuModule,
    RouterModule.forChild([]),
  ],
  declarations: [UserMenuComponent],
  exports: [...exportModules, UserMenuComponent],
})
export class WebSpotifySharedViewModule {}
