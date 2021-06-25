import { Component, Input } from '@angular/core';

@Component({
  selector: 'artur-ba-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
}
