import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { CountryService } from '@artur-ba/shared/service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyDataService {
  /**
   * More details on available APIs
   * https://developer.spotify.com/documentation/web-api/reference/
   */
  protected readonly baseURL = 'https://api.spotify.com/v1/';

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly countryService: CountryService
  ) {}

  /**
   * https://api.spotify.com/v1/albums/{uri}/tracks
   * @param albumUri
   * @returns Promise
   */
  getAlbumTracks(albumUri: string): Promise<SpotifyApi.AlbumTracksResponse> {
    return this.httpClient
      .get<SpotifyApi.AlbumTracksResponse>(
        this.baseURL + `albums/${albumUri}/tracks`
      )
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/albums/{uri}
   * @param albumUri
   * @returns Promise
   */
  getAlbum(albumUri: string): Promise<SpotifyApi.AlbumObjectFull> {
    return this.httpClient
      .get<SpotifyApi.AlbumObjectFull>(this.baseURL + `albums/${albumUri}`)
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/traks?tracksUri
   * @param tracksIds
   * @returns Promise
   */
  getTracks(tracksIds: string[]): Promise<SpotifyApi.MultipleTracksResponse> {
    tracksIds = tracksIds.map((track) => {
      const trackUri = track.split(':');
      return trackUri[trackUri.length - 1];
    });
    const tracksParam = new HttpParams().set('ids', tracksIds.toString());
    return this.httpClient
      .get<SpotifyApi.MultipleTracksResponse>(this.baseURL + 'tracks', {
        params: tracksParam,
      })
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/me
   * @returns Promise
   */
  getUserData(): Promise<SpotifyApi.CurrentUsersProfileResponse> {
    return this.httpClient
      .get<SpotifyApi.CurrentUsersProfileResponse>(this.baseURL + 'me')
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/artist/{uri}
   * @param artistUri
   * @returns Promise
   */
  getArtist(artistUri: string): Promise<SpotifyApi.SingleArtistResponse> {
    return this.httpClient
      .get<SpotifyApi.SingleArtistResponse>(
        this.baseURL + `artists/${artistUri}`
      )
      .toPromise();
  }

  /**
   * https://api.spotify.com/v1/artist/{uri}/top-tracks
   * @param artistUri
   * @returns Promise
   */
  async getArtistTopTracks(
    artistUri: string
  ): Promise<SpotifyApi.ArtistsTopTracksResponse> {
    const params = new HttpParams().append(
      'market',
      await this.countryService.getUserCountry()
    );
    return this.httpClient
      .get<SpotifyApi.ArtistsTopTracksResponse>(
        this.baseURL + `artists/${artistUri}/top-tracks`,
        { params }
      )
      .toPromise();
  }
}
