import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueRoutingModule } from './queue-routing.module';
import { QueueComponent } from './queue/queue.component';
import { TrackListModule } from '../../../../../shared/view/src/lib/track-list/track-list.module';

@NgModule({
  declarations: [QueueComponent],
  imports: [CommonModule, QueueRoutingModule, TrackListModule],
})
export class QueueModule {}
