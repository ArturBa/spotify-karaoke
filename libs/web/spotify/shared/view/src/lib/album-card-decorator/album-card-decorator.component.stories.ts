import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import { AlbumCardDecoratorComponent } from './album-card-decorator.component';
import { CardComponent } from '../card/card.component';
import * as CardComponentStories from '../card/card.component.stories';
import { CardDecoratorComponent } from '../card-decorator/card-decorator.component';

export default {
  component: AlbumCardDecoratorComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AlbumCardDecoratorComponent,
        CardComponent,
        CardDecoratorComponent,
      ],
      imports: [
        MatCardModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: AlbumCardDecoratorComponent },
        ]),
      ],
    }),
  ],
  title: 'Card/Decorator/Album Card Decorator',
} as Meta;

const Template: Story<AlbumCardDecoratorComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  album: {
    images: [
      {
        url: 'https://source.unsplash.com/random/500x500',
        height: 500,
        width: 500,
      },
    ],
    name: 'Appetite For Destruction',
    release_date: '1998-10-10',
    uri: 'album/3I9Z1nDCL4E0cP62flcbI5',
  },
};

export const ConcreteComponent = Template.bind({});
ConcreteComponent.args = {
  ...CardComponentStories.Default.args,
};
