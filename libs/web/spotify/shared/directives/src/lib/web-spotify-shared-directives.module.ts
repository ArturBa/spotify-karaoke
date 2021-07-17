import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective } from './card.directive';

const exports = [CardDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...exports],
  exports,
})
export class WebSpotifySharedDirectivesModule {}
