import { Component } from '@angular/core';

import { PlayerService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(protected playerService: PlayerService) {
    const token =
      'BQB9jOBX9UAaBA3JCsclJd0CJEnqhrp_SRZ3kkh6u4I0GZMOPRFIP7UJK-31_qudDQFpiVpGfuNxhFuOdg3Nunk5DaRacAm0hhMZY6-v8bbqxJBuYN0plzjUoXH9za1VaijABUATDSkzSmEy-BU5pK4vGQ3YTNVlzvgGiVo5DQwasIJed6Xw4ps';
    playerService.init(token).catch((e) => {
      console.log(e);
    });
  }
}
