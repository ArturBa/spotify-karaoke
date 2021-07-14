import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';

import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'artur-ba-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements AfterViewInit {
  @ViewChild('anchor') anchor: ElementRef<HTMLElement>;

  @ContentChild(CardListComponent)
  abstractList: CardListComponent<unknown, unknown>;

  protected observer: IntersectionObserver;

  ngAfterViewInit() {
    const options = {
      root: null,
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.loadMore();
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }

  isLoading$(): Observable<boolean> {
    return this.abstractList.isLoading$;
  }

  loadMore(): void {
    if (
      !this.abstractList.isLoading$.value &&
      this.abstractList.isMoreToShow()
    ) {
      this.abstractList.loadMoreData();
    }
  }
}
