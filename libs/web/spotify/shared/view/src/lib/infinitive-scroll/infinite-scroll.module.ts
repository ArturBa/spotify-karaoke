import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

import { CardListComponent } from './card-list/card-list.component';
import { CardModule } from '../card/card.module';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { AbstractListStrategy } from './abstract-list/abstract-list.strategy';
import { AbstractListComponent } from './abstract-list/abstract-list.component';

const exports = [InfiniteScrollComponent, CardListComponent];

@NgModule({
  declarations: [...exports, AbstractListComponent],
  imports: [CommonModule, MatProgressSpinnerModule, CardModule],
  exports,
})
export class InfiniteScrollModule {}
