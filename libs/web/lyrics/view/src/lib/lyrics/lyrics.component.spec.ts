import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  createSpyObj,
  MatDialogServiceMock,
} from '@artur-ba/shared/test-helpers';
import { MiniLyricsService } from '@artur-ba/web/lyrics/mini-lyrics/service';

import {
  LyricsSearchState,
  LyricsSelectionComponent,
} from '../lyrics-selection/lyrics-selection.component';
import { LyricsComponent } from './lyrics.component';
import { MatDialog } from '@angular/material/dialog';

describe('LyricsComponent', () => {
  let component: LyricsComponent;
  let fixture: ComponentFixture<LyricsComponent>;

  const miniLyricsServiceMock = createSpyObj('MiniLyricsService', ['']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule],
      declarations: [LyricsComponent, LyricsSelectionComponent],
      providers: [
        { provide: MatDialog, useClass: MatDialogServiceMock },
        { provide: MiniLyricsService, useValue: miniLyricsServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display searching info while searching', fakeAsync(() => {
    component.state = { state: LyricsSearchState.SEARCHING };
    fixture.detectChanges();
    tick();

    const communicate = fixture.debugElement.query(By.css('span'));
    const spinner = fixture.debugElement.query(By.css('mat-spinner'));

    expect(communicate).toBeTruthy();
    expect(spinner).toBeTruthy();
  }));

  it('should display no lyrics found if none lyrics and not searching', fakeAsync(() => {
    component.state = { state: LyricsSearchState.SEARCH_FAILED };
    fixture.detectChanges();
    tick();

    const communicate = fixture.debugElement.query(By.css('span'));
    const spinner = fixture.debugElement.query(By.css('mat-spinner'));

    expect(communicate).toBeTruthy();
    expect(spinner).toBeFalsy();
  }));
});
