import { TestBed } from '@angular/core/testing';

import { GlobalDataService } from './globaldata.service';

describe('GlobaldataService', () => {
  let service: GlobalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
