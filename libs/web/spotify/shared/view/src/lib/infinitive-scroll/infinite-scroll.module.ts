import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

import { CardModule } from '../card/card.module';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { AbstractListComponent } from './abstract-list/abstract-list.component';

const exports = [InfiniteScrollComponent];

@NgModule({
  declarations: [...exports, AbstractListComponent],
  imports: [CommonModule, MatProgressSpinnerModule, CardModule],
  exports,
})
export class InfiniteScrollModule {}
