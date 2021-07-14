import { Component, forwardRef, Input } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';

import { CardModule } from '../../card/card.module';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import {
  CardListComponent,
  CardListViewMode,
} from '../card-list/card-list.component';
import { CardListStrategy } from '../card-list/card-list.strategy';
import { album } from '../../../../.storybook/sharedData';

export default {
  component: InfiniteScrollComponent,
  decorators: [
    moduleMetadata({
      declarations: [InfiniteScrollComponent, CardListComponent],
      imports: [
        CardModule,
        MatProgressSpinnerModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: InfiniteScrollComponent },
        ]),
      ],
    }),
  ],
  title: 'Shared/IndefiniteScroll',
  argTypes: {
    cardsCount: {
      control: { type: 'number', min: 1 },
    },
  },
} as Meta;

const cardListViewMode = CardListViewMode.ALBUM;
class CardListMockStrategy
  implements
    CardListStrategy<Partial<SpotifyApi.AlbumObjectSimplified>, string>
{
  getData(requestParams, pagination) {
    const data = [album];
    const paginationResponse = {
      items: data,
      limit: 20,
      offset: 20 + pagination.offset,
      total: 40,
      href: '',
      next: null,
      previous: null,
    };
    return Promise.resolve(paginationResponse);
  }

  getRequestParams() {
    return 'params';
  }
}

const newS = new CardListMockStrategy();

const Template: Story<InfiniteScrollComponent> = (args) => ({
  props: {
    ...args,
  },
  template: `
  <artur-ba-indefinite-scroll>
    <artur-ba-card-list [viewMode]="cardListViewMore" [strategy]="newS">
    </artur-ba-card-list>
  </artur-ba-indefinite-scroll>
  `,
});

export const Default = Template.bind({});
Default.args = {
  cardsCount: 29,
};
