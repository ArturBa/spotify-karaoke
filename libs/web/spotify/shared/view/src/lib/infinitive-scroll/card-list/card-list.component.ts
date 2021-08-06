import { Component, Input } from '@angular/core';

import { CardListViewMode } from '../../card/dynamic-card-list/dynamic-card-list.component';
import { AbstractListComponent } from '../abstract-list/abstract-list.component';

@Component({
  selector: 'artur-ba-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent<T, R> extends AbstractListComponent<T, R> {
  @Input() viewMode: CardListViewMode;
}
