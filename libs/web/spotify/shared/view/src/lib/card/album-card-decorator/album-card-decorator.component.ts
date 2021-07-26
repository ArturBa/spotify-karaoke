import { Component, OnInit } from '@angular/core';

import {
  TrackHelper,
  UriDataHelper,
} from '@artur-ba/web/spotify/shared/helper';
import { CardDecoratorComponent } from '../card-decorator/card-decorator.component';

@Component({
  selector: 'artur-ba-album-card-decorator',
  templateUrl: '../card-decorator/card-decorator.component.html',
  styleUrls: ['../card-decorator/card-decorator.component.scss'],
})
export class AlbumCardDecoratorComponent
  extends CardDecoratorComponent<SpotifyApi.AlbumObjectSimplified>
  implements OnInit
{
  protected initWithData(): void {
    this.cardImageAlt = $localize`:album-card-decorator.image-alt:Album cover`;
    this.images = this.data.images;
    this.title = this.data.name;
    this.subtitle = this.getAlbumReleaseYear();
    this.redirectUrl = `album/${UriDataHelper.getClearUri(this.data.uri)}`;
  }

  protected getAlbumReleaseYear(): string {
    return new Date(this.data.release_date).getFullYear().toString();
  }
}
