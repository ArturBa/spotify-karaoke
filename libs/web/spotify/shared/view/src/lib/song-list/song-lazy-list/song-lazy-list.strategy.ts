import { AbstractLazyListStrategy } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.strategy';

export class SongLazyListStrategy
  implements AbstractLazyListStrategy<SpotifyApi.TrackObjectFull, string>
{
  getData() {
    return null;
  }

  getRequestParams() {
    return null;
  }
}
