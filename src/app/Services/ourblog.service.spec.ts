import { TestBed } from '@angular/core/testing';

import { OurblogService } from './ourblog.service';

describe('OurblogService', () => {
  let service: OurblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
