import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';

@Component({
  selector: 'artur-ba-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  albumSearchResult: any;
  searchInput = '';

  protected readonly albumsWrapperTitle = $localize`:search.albumsWrapper:Albums`;

  constructor(protected readonly spotifyData: SpotifyDataService) {}

  async search(): Promise<void> {
    this.albumSearchResult = await this.spotifyData.getSearchAlbumResult(
      this.searchInput
    );
  }

  getAlbumsWrapperTitle(): string {
    return this.albumsWrapperTitle;
  }
}
