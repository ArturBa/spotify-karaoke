import { Component } from '@angular/core';

import { EnvSettingsService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
})
export class AppInfoDialog {
  constructor(protected env: EnvSettingsService) {}

  get appVersion(): string {
    return this.env.app_version;
  }
}
