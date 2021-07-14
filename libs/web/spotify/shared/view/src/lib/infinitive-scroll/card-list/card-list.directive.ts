import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cardList]',
})
export class CardListDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
