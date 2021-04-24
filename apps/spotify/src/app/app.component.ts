import { Component, HostBinding } from '@angular/core';
import { UserSettingsService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class') className = '';

  protected readonly darkClassName = 'darkMode';

  constructor(protected userSettings: UserSettingsService) {
    this.userSettings.darkModeOn$.subscribe((darkMode) => {
      console.log(darkMode);
      this.className = darkMode ? this.darkClassName : '';
    });
  }
}
