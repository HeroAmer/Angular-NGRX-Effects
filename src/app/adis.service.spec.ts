import { TestBed } from '@angular/core/testing';

import { AdisService } from './adis.service';

describe('AdisService', () => {
  let service: AdisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
