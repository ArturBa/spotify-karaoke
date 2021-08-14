import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

import { images, imagesArray } from '../../../../.storybook/sharedData';
import { CardComponent } from './card.component';
import { ImageModule } from '../../image/image.module';
import { PlayModule } from '../../play/play.module';
import { SpotifyPlayerServiceMock } from '../../../../.storybook/sharedMock';

export default {
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [
        ImageModule,
        PlayModule,
        MatCardModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: CardComponent },
        ]),
      ],
      providers: [
        {
          provide: SpotifyPlayerService,
          useClass: SpotifyPlayerServiceMock,
        },
      ],
    }),
  ],
  title: 'Card/Card',
} as Meta;

const actionsData = {
  onClickTask: action('on click'),
};

const Template: Story<CardComponent> = (args) => ({
  props: {
    ...args,
    click: actionsData.onClickTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  images: imagesArray,
  title: 'Appetite For Destruction',
  subtitle: "Guns N' Roses",
  redirectUrl: 'album/3I9Z1nDCL4E0cP62flcbI5',
  context_uri: 'spotify:album:3I9Z1nDCL4E0cP62flcbI5',
};

export const HorizontalImage = Template.bind({});
HorizontalImage.args = {
  ...Default.args,
  images: [{ url: images.horizontal, width: 1100 }],
};

export const VerticalImage = Template.bind({});
VerticalImage.args = {
  ...Default.args,
  images: [{ url: images.vertical, width: 500 }],
};

export const SmallImage = Template.bind({});
SmallImage.args = {
  ...Default.args,
  images: [{ url: images.sq100, width: 100 }],
};
