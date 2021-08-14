import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PlayRoutingModule } from './play-routing.module';
import { PlayButtonComponent } from './play-button/play-button.component';

const exports = [PlayButtonComponent];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule, PlayRoutingModule, MatButtonModule, MatIconModule],
  exports,
})
export class PlayModule {}
