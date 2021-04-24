import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { StateInterface } from './state-interface';
export class UserSettings {
  cookies_allowed = 'false';
  dark_mode = 'false';
}

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService extends StateInterface<UserSettings> {
  protected readonly cookies_allowed_str = 'cookies_allowed';
  protected readonly dark_mode_str = 'dark_mode';
  protected readonly true_str = 'true';

  constructor(protected cookieService: CookieService) {
    super();
    const cookie_data = this.cookieService.getAll();
    this.setState({
      ...this.cookieService,
      ...cookie_data,
    } as UserSettings);
  }

  readonly darkModeOn$ = this.state$.pipe(
    filter((p) => p.dark_mode !== undefined),
    map((p) => p.dark_mode === this.true_str)
  ) as Observable<boolean>;

  readonly cookiesAccepted$ = this.state$.pipe(
    map((p) => p.cookies_allowed === this.true_str)
  ) as Observable<boolean>;

  allowCookies(): void {
    this.cookieService.set(this.cookies_allowed_str, this.true_str);
    this.setState({
      cookies_allowed: this.true_str,
    });
  }

  darkMode(isOn: boolean): void {
    const isOnStr = `${isOn}`;
    this.setState({
      dark_mode: isOnStr,
    });
    this.cookieService.set(this.dark_mode_str, isOnStr);
  }
}
