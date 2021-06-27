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

  constructor(protected readonly spotifyData: SpotifyDataService) {}

  async search(): Promise<void> {
    this.albumSearchResult = await this.spotifyData.getSearchAlbumResult(
      this.searchInput
    );
  }
}
