import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

import { PlayButtonComponent } from './play-button.component';

class SpotifyPlayerServiceMock {
  playContext(context_uri) {
    action('playContext')(context_uri);
  }
}

export default {
  title: 'Play/PlayButton',
  component: PlayButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [PlayButtonComponent],
      imports: [MatButtonModule, MatIconModule],
      providers: [
        {
          provide: SpotifyPlayerService,
          useClass: SpotifyPlayerServiceMock,
        },
      ],
    }),
  ],
} as Meta;

const Template: Story<PlayButtonComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  context_uri: 'spotify:album:0rkFxZHJhYGKi5qJjZxq',
};
