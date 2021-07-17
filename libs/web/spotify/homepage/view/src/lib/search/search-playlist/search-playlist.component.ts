import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import {
  CardListComponent,
  CardListViewMode,
  SearchPlaylistCardListStrategy,
} from '@artur-ba/web/spotify/shared/view';

@Component({
  selector: 'artur-ba-search-playlist',
  templateUrl: './search-playlist.component.html',
})
export class SearchPlaylistComponent {
  readonly CardListViewMode = CardListViewMode;

  @ViewChild(CardListComponent) cardList: CardListComponent<
    SpotifyApi.AlbumObjectSimplified,
    string
  >;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly spotifyData: SpotifyDataService,
  ) {}

  getStrategy(): SearchPlaylistCardListStrategy {
    return new SearchPlaylistCardListStrategy(this.route, this.spotifyData);
  }

  search() {
    this.cardList?.ngOnInit();
  }
}
