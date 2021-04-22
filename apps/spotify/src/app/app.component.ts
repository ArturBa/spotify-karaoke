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
      'BQCvfmJ6qNf7-ju3aLBnBsbFaiBS9UkcLIilsaDafRbhOjcv8psNQUVd3FCUJw-e1D53azg4rGtzbFGNN1bHAasBzvr_odd4eypzV6MpgE5tvE9QgMzh3vSpfw9KwjHcVI-RCEcaoXnjXQv51II3pJ58BrJvrV1ys_Ym5nzcrCqtZHXD75oiLX8';
    playerService.init(token);
  }
}
