import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'artur-ba-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class SidebarComponent {
  protected el: HTMLElement;
  protected noHoverClassName = 'sidebar--no-hover';

  constructor(protected readonly elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
    this.initNoHover();
  }

  onMouseEnter() {
    this.setHover();
  }
  onMouseLeave() {
    this.unsetHover();
  }

  protected initNoHover() {
    this.unsetHover();
  }

  protected unsetHover() {
    this.el.classList.add(this.noHoverClassName);
  }

  protected setHover() {
    this.el.classList.remove(this.noHoverClassName);
  }
}
