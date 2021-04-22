import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { MiniLyricsResponse } from '@artur-ba/web/lyrics/mini-lyrics/interface';

@Injectable({
  providedIn: 'root',
})
export class MiniLyricsService {
  readonly url = 'minilyrics-proxy';

  constructor(protected httpClient: HttpClient) {}

  async getLyrics(title: string, artist: string): Promise<string> {
    const miniLyricsResponse = await this.getLyricsBase(title, artist);
    return this.httpClient
      .get(this.getMiniLyricsAddress(miniLyricsResponse), {
        responseType: 'text',
      })
      .toPromise();
  }

  getLyricsBase(title: string, artist: string): Promise<MiniLyricsResponse> {
    const params = new HttpParams({
      fromObject: {
        title,
        artist,
      },
    });
    return this.httpClient
      .get<MiniLyricsResponse>(this.url, { params })
      .toPromise();
  }

  protected getMiniLyricsAddress(
    miniLyricsResponse: MiniLyricsResponse
  ): string {
    return (
      this.setProxyAddressToMiniLyrics(miniLyricsResponse.server_url) +
      miniLyricsResponse.children[0].link
    );
  }

  protected setProxyAddressToMiniLyrics(server_url: string): string {
    const hostRegex = /^http:\/\/search.crintsoft.com/;

    return server_url.replace(hostRegex, '/minilyrics');
  }
}
