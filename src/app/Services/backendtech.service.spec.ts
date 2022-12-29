import { TestBed } from '@angular/core/testing';

import { BackendtechService } from './backendtech.service';

describe('BackendtechService', () => {
  let service: BackendtechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendtechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
