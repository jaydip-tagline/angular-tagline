import { TestBed } from '@angular/core/testing';

import { FrontendtechService } from './frontendtech.service';

describe('FrontendtechService', () => {
  let service: FrontendtechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendtechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
