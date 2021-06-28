import {
  AfterContentInit,
  Component,
  ContentChild,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AbstractListComponent } from '../abstract-list/abstract-list.component';

@Component({
  selector: 'artur-ba-indefinite-scroll',
  templateUrl: './indefinite-scroll.component.html',
  styleUrls: ['./indefinite-scroll.component.scss'],
})
export class IndefiniteScrollComponent {
  @ContentChild(AbstractListComponent)
  abstractList: AbstractListComponent<unknown>;

  isLoading$(): Observable<boolean> {
    return this.abstractList.isLoading$;
  }

  loadMore(): void {
    console.log(this.abstractList.isMoreToShow());
    this.abstractList.loadMoreData();
  }
}
