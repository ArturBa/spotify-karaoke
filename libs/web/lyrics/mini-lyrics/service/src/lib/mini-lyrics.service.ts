import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiniLyricsService {
  readonly headers = new HttpHeaders({
    'User-Agent': 'MiniLyrics',
  });

  readonly url = 'http://search.crintsoft.com/searchlyrics.htm';

  constructor(protected httpClient: HttpClient) {}

  getLyrics(title: string, artist: string): Observable<any> {
    const query =
      `<?xml version='1.0' encoding='utf-8' ?>` +
      `<searchV1 filetype="lyrics" ClientCharEncoding="utf-8" ` +
      ` artist="${artist || ''}" title="${title || ''}" client="MiniLyrics" />`;
    return this.httpClient.post(this.url, query, { headers: this.headers });
  }
}
