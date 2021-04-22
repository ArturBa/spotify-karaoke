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
      'BQCkK6a8Z-QPtCh5P_HqOh5RUVttzghB6P0Zg_DysQU0ZC2Rz1rc08ncJl2cSSG-ufJfseROr0LNZnp25b22nFMTjH03b0G8vMWVEO6wBv65M2yRLNXlAOPzht5fap6Hu1x1MFQtpAoqN47IgG3H0guJUxmzoKiTx6a9mqNP4qeuCEoVq62PLq4';
    playerService.init(token).catch((e) => {
      console.log(e);
    });
  }
}
