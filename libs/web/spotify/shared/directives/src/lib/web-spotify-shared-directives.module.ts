import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AutoFocusDirective } from './auto-focus.directive';
import { CardDirective } from './card.directive';
import { OverflowDirective } from './overflow.directive';

const exports = [AutoFocusDirective, CardDirective, OverflowDirective];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule, MatTooltipModule],
  exports,
})
export class WebSpotifySharedDirectivesModule {}
