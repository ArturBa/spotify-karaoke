import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';

import { CardComponent } from './card.component';

export default {
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [MatCardModule],
    }),
  ],
  title: 'CardComponent',
} as Meta;

const Template: Story<CardComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  image: 'https://source.unsplash.com/random/500x500',
  title: 'Appetite For Destruction',
  subtitle: "Guns N' Roses",
};
