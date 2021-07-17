import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

import { WebSpotifySharedDirectivesModule } from '@artur-ba/web/spotify/shared/directives';

import { CardListComponent } from './card-list/card-list.component';
import { CardModule } from '../card/card.module';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

const exports = [InfiniteScrollComponent, CardListComponent];

@NgModule({
  declarations: [...exports],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    CardModule,
    WebSpotifySharedDirectivesModule,
  ],
  exports,
})
export class InfiniteScrollModule {}
