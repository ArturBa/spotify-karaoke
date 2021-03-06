import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PaginationInterface } from '@artur-ba/web/spotify/shared/service';

import { AbstractLazyListStrategy } from './abstract-lazy-list.strategy';

@Component({
  template: '',
})
export class AbstractLazyListComponent<T, R> implements OnInit {
  @Input() strategy: AbstractLazyListStrategy<T, R>;

  data: T[] = [];

  requestParams: R;

  isLoading$ = new BehaviorSubject(true);

  protected pagination = {} as PaginationInterface;

  ngOnInit(): void {
    this.clearData();
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

  loadMoreData(): void {
    if (this.isLoading$.value || !this.isMoreToShow()) {
      return;
    }
    this.isLoading$.next(true);
    this.getMoreData();
  }

  protected clearData(): void {
    this.data = [];
    this.isLoading$.next(true);
  }

  protected isMoreToShow(): boolean {
    const { total, offset, limit } = this.pagination;
    return total > offset + limit;
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
