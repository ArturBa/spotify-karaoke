import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MinilyricsResponse } from '@artur-ba/web/lyrics/mini-lyrics/interface';

@Injectable({
  providedIn: 'root',
})
export class MiniLyricsService {
  readonly url = 'minilyrics-proxy';

  constructor(protected httpClient: HttpClient) {}

  getLyrics0(title: string, artist: string): Observable<Observable<string>> {
    return this.getLyricsBase(title, artist).pipe(
      map((res: MinilyricsResponse) => {
        return this.httpClient.get('minilyrics/l/ll/f/fn_owuwaz.lrc', {
          responseType: 'text',
        });
      })
    );
  }
  getLyrics(minilyricsResponse: MinilyricsResponse): Observable<any> {
    return this.httpClient.get('minilyrics/l/ll/f/fn_owuwaz.lrc', {
      responseType: 'text',
    });
  }

  getLyricsBase(title: string, artist: string): Observable<MinilyricsResponse> {
    const params = new HttpParams({
      fromObject: {
        title,
        artist,
      },
    });
    return this.httpClient.get<MinilyricsResponse>(this.url, { params });
  }
}
