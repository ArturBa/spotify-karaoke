import { TestBed } from '@angular/core/testing';

import { PlayerState } from './player.state';

describe('PlayerStore', () => {
  let service: PlayerState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
