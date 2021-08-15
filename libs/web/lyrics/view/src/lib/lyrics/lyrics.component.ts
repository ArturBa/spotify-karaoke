import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Lyrics, LyricsParser } from '@artur-ba/web/lyrics/model';
import { LyricsItem } from '@artur-ba/web/lyrics/mini-lyrics/interface';
import { MiniLyricsService } from '@artur-ba/web/lyrics/mini-lyrics/service';
import { PlayerStore } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit, OnDestroy {
  lyrics: Lyrics;
  track: Spotify.Track;
  searching = false;
  progress$: Observable<number>;

  protected subscriptions = new Subscription();

  constructor(
    protected lyricsAPI: MiniLyricsService,
    protected playerState: PlayerStore,
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscriptions.add(
      this.playerState.currentTrack$.subscribe(async (track) => {
        this.handleSongUpdate(track);
      }),
    );
    this.subscriptions.add(
      this.playerState.progress$.subscribe((pos) => {
        this.progress$ = pos;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  protected async handleSongUpdate(track: Spotify.Track): Promise<void> {
    if (JSON.stringify(this.track) === JSON.stringify(track)) {
      return;
    }
    this.searching = true;
    this.track = track;
    this.updateLyrics();
  }

  protected async updateLyrics(): Promise<void> {
    try {
      const lyricsList = await this.lyricsAPI.getLyricsList(
        this.track.name,
        this.track.artists[0].name,
      );
      const lcrEnd = /.*\.lrc$/;
      const lcrLyrics = lyricsList.children.filter((lyrics) =>
        lcrEnd.test(lyrics.link),
      );
      const sortedByDownload = lcrLyrics.sort(
        (a: LyricsItem, b: LyricsItem) => b.downloads - a.downloads,
      );
      const foundLyricAlbum = sortedByDownload.find(
        (lyricsItem: LyricsItem) =>
          lyricsItem.album?.toLowerCase() ===
          this.track.album.name.toLowerCase(),
      );
      if (foundLyricAlbum) {
        this.setLyricsByLrc(await this.lyricsAPI.getLyrics(foundLyricAlbum));
      } else {
        this.setLyricsByLrc(
          await this.lyricsAPI.getLyrics(sortedByDownload[0]),
        );
      }
      this.searching = false;
    } catch (err) {
      this.searching = false;
      this.lyrics = undefined;
    }
  }

  protected setLyricsByLrc(url: string) {
    this.lyrics = LyricsParser.lrcParser(url);
  }
}
