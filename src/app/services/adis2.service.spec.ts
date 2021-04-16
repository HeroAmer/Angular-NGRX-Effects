import { TestBed } from '@angular/core/testing';

import { Adis2Service } from './adis2.service';

describe('Adis2Service', () => {
  let service: Adis2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adis2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
