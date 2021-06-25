import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'artur-ba-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() redirectUrl: string;

  @Output() onClick = new EventEmitter<void>();

  constructor(protected readonly router: Router) {}

  onClickHandler(): void {
    this.onClick.emit();
    console.log('clicked');
  }
}
