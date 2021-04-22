import { Component } from '@angular/core';

import { PlayerService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spotify';

  constructor(playerService: PlayerService) {
    const token =
      'BQDqqSSOJuK7PhE0g8CLuksT1TcWfSK-gSezTjIAoGxa4iH9ybLiwZmz-ZgeAA3qGlj1zU4G1Md7ZFE3C_PiJrPmug2e_i80PbegjQF4X34QlFtelcaL02WtMaar9NhYspiBSiZzcKLTtFP__8TPjLfgwuLlI640ugOPfuPKB9Wgbd6fWIIq5L8';
    playerService.init(token).catch((e) => {
      console.log(e);
    });
  }
}
