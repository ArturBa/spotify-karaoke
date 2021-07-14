import { Component, Input } from '@angular/core';

import {
  TrackHelper,
  UriDataHelper,
} from '@artur-ba/web/spotify/shared/helper';

import { CardDecoratorComponent } from '../card-decorator/card-decorator.component';

@Component({
  selector: 'artur-ba-playlist-card-decorator',
  templateUrl: '../card-decorator/card-decorator.component.html',
  styleUrls: ['../card-decorator/card-decorator.component.scss'],
})
export class PlaylistCardDecoratorComponent extends CardDecoratorComponent<SpotifyApi.PlaylistObjectSimplified> {
  protected readonly ownerPrefix = $localize`:playlist.ownerPrefix:By `;

  protected initWithData(): void {
    this.imageUrl = this.getImage();
    this.title = this.data.name;
    this.subtitle = `${this.ownerPrefix} <em> ${this.data.owner.display_name} </em>`;
    this.redirectUrl = `album/${UriDataHelper.getClearUri(this.data.uri)}`;
  }

  protected getImage(): string {
    return TrackHelper.getImage300Url(this.data);
  }
}
