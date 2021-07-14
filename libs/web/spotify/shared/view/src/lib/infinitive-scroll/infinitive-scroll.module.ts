import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardModule } from '../card/card.module';
import { CardListComponent } from './card-list/card-list.component';
import { CardListDirective } from './card-list/card-list.directive';

import { IndefiniteScrollComponent } from './indefinite-scroll/indefinite-scroll.component';

const exports = [IndefiniteScrollComponent, CardListComponent];

@NgModule({
  declarations: [...exports, CardListDirective],
  imports: [CommonModule, MatProgressSpinnerModule, CardModule],
  exports,
})
export class InfinitiveScrollModule {}
