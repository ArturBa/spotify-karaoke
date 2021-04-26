import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PlayerStore } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit, OnDestroy {
  trackWindow: Spotify.PlaybackTrackWindow;

  protected subscriptions: Subscription[] = [];

  constructor(protected playerStore: PlayerStore) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.playerStore.trackWindow$.subscribe((trackWindow) => {
        if (this.trackWindow !== trackWindow) {
          this.trackWindow = trackWindow;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
