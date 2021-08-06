import { Component, OnInit, Input } from '@angular/core';

import { PaginationInterface } from '@artur-ba/web/spotify/shared/service';
import { BehaviorSubject } from 'rxjs';
import { AbstractListStrategy } from './abstract-list.strategy';

@Component({
  template: '',
})
export class AbstractListComponent<T, R> implements OnInit {
  @Input() strategy: AbstractListStrategy<T, R>;

  data: T[] = [];

  requestParams: R;

  isLoading$ = new BehaviorSubject(true);

  protected pagination = {} as PaginationInterface;

  ngOnInit(): void {
    this.initRequestParams();
    this.initData();
  }

  getData(
    requestParam: R,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<T>> {
    return this.strategy.getData(requestParam, pagination);
  }

  getRequestParams(): R {
    return this.strategy.getRequestParams();
  }

  isMoreToShow(): boolean {
    const { total, offset, limit } = this.pagination;
    return total > offset + limit;
  }

  loadMoreData(): void {
    this.isLoading$.next(true);
    this.getMoreData();
  }

  protected initRequestParams(): void {
    this.requestParams = this.getRequestParams();
  }

  protected async initData(): Promise<void> {
    const response = await this.getData(this.requestParams, this.pagination);
    this.data = this.getItemsFromResponse(response);
    this.pagination = this.getPaginationFromResponse(response);
    this.isLoading$.next(false);
  }

  protected async getMoreData(): Promise<void> {
    this.pagination.offset += this.pagination.limit;
    const response = await this.getData(this.requestParams, this.pagination);
    this.data = [...this.data, ...this.getItemsFromResponse(response)];
    this.isLoading$.next(false);
  }

  protected getItemsFromResponse(response: SpotifyApi.PagingObject<T>): T[] {
    return response.items;
  }

  protected getPaginationFromResponse(
    response: SpotifyApi.PagingObject<T>,
  ): PaginationInterface {
    const { limit, next, offset, previous, total } = response;
    return { limit, next, offset, previous, total };
  }
}
