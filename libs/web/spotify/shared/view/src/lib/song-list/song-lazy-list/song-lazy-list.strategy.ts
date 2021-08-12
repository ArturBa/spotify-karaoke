import { ActivatedRoute } from '@angular/router';

import {
  PaginationInterface,
  SpotifyAlbumDataService,
} from '@artur-ba/web/spotify/shared/service';

import { AbstractLazyListStrategy } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.strategy';

export class SongAlbumLazyListStrategy
  implements AbstractLazyListStrategy<SpotifyApi.TrackObjectFull, string>
{
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyAlbumData: SpotifyAlbumDataService,
  ) {}

  getData(
    requestParam: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>> {
    return this.spotifyAlbumData.getAlbumTracks(
      requestParam,
      pagination,
    ) as Promise<SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>>;
  }

  getRequestParams(): string {
    return this.route.snapshot.params['uri'];
  }
}
