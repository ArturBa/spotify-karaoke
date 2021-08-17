import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LyricsSelectionDialogComponent } from './lyrics-selection-dialog.component';
import { LyricsItem } from '../../../../mini-lyrics/interface/src';

describe('LyricsComponent', () => {
  let component: LyricsSelectionDialogComponent;
  let fixture: ComponentFixture<LyricsSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LyricsSelectionDialogComponent],
      imports: [
        NoopAnimationsModule,
        MatDialogModule,
        FormsModule,
        MatSelectModule,
        MatDialogModule,
        MatButtonModule,
      ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: { lyrics: [] } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getLyricsString', () => {
    const lyrics = { title: 'title', artist: 'artist' } as LyricsItem;
    it('should return a artist - title for a track', () => {
      expect(component.getLyricsString(lyrics)).toEqual('artist - title');
    });
    it('should return a artist - title - album for lyrics with a album', () => {
      const lyrics_with_album = {
        ...lyrics,
        album: 'album',
      } as LyricsItem;
      expect(component.getLyricsString(lyrics_with_album)).toEqual(
        'artist - title - album',
      );
    });
  });
});
