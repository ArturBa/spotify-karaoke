import { TestBed } from '@angular/core/testing';

import { SpotifyMarketInterceptor } from './spotify-market.interceptor';

describe('SpotifyMarketInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [SpotifyMarketInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: SpotifyMarketInterceptor = TestBed.inject(
      SpotifyMarketInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
