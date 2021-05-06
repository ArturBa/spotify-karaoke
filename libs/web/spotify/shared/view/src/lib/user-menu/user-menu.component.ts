import { Component, OnDestroy, OnInit } from '@angular/core';
import '@angular/localize/init';
import { MatDialog } from '@angular/material/dialog';

import {
  AuthStore,
  HotkeyService,
  UserSettingsService,
} from '@artur-ba/shared/service';
import { HotkeyDialogComponent } from '@artur-ba/shared/view';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'artur-ba-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit, OnDestroy {
  user: SpotifyApi.CurrentUsersProfileResponse;
  darkMode = false;

  protected subscriptions: Subscription[] = [];

  constructor(
    protected spotifyData: SpotifyDataService,
    protected dialog: MatDialog,
    protected authStore: AuthStore,
    protected hotkey: HotkeyService,
    protected userSettings: UserSettingsService
  ) {}

  logout(): void {
    this.authStore.logout();
  }

  async ngOnInit(): Promise<void> {
    this.user = await this.spotifyData.getUserData();
    const darkModeSub = this.userSettings.darkModeOn$.subscribe((darkMode) => {
      this.darkMode = darkMode;
    });
    const darkModeAction = $localize`:hotkeys.dark-mode:Toggle dark mode`;
    const showHotKeyAction = $localize`:hotkeys.show-hotkeys:Show hotkeys dialog`;
    this.hotkey
      .addShortcut({ keys: 'control.o', action: darkModeAction })
      .subscribe(() => this.toggleDarkMode());
    this.hotkey
      .addShortcut({ keys: 'shift.o', action: darkModeAction })
      .subscribe(() => this.toggleDarkMode());
    this.hotkey
      .addShortcut({ keys: 'control.?', action: showHotKeyAction })
      .subscribe(() => this.openHotKeyDialog());
    this.hotkey
      .addShortcut({ keys: 'shift.?', action: showHotKeyAction })
      .subscribe(() => this.openHotKeyDialog());
    this.subscriptions.push(darkModeSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  toggleDarkMode(newMode?: boolean): void {
    const mode = newMode ? newMode : !this.darkMode;
    this.userSettings.darkMode(mode);
  }

  openHotKeyDialog(): void {
    this.dialog.open(HotkeyDialogComponent, { data: this.hotkey.hotkeys });
  }
}
