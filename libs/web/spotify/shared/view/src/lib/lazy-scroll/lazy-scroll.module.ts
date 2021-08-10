import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

import { AbstractLazyListComponent } from './abstract-lazy-list/abstract-lazy-list.component';
import { CardModule } from '../card/card.module';
import { LazyScrollComponent } from './lazy-scroll/lazy-scroll.component';

const exports = [LazyScrollComponent];

@NgModule({
  declarations: [...exports, AbstractLazyListComponent],
  imports: [CommonModule, MatProgressSpinnerModule, CardModule],
  exports,
})
export class LazyScrollModule {}
