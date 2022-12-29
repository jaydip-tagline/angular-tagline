import { TestBed } from '@angular/core/testing';

import { InquiryfooterService } from './inquiryfooter.service';

describe('InquiryfooterService', () => {
  let service: InquiryfooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquiryfooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
