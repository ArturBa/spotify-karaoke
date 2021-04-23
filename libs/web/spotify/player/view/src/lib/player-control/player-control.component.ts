import { Component, OnInit } from '@angular/core';

import { PlayerStore } from '@artur-ba/shared/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'artur-ba-player-control',
  templateUrl: './player-control.component.html',
  styleUrls: ['./player-control.component.scss'],
})
export class PlayerControlComponent {
  progress$: Observable<number>;
  max: number;

  constructor(protected playerStore: PlayerStore) {
    this.playerStore.progress$.subscribe((progress) => {
      this.progress$ = progress;
    });

    this.playerStore.playback$.subscribe((playback) => {
      this.max = playback.duration;
    });
  }
}
