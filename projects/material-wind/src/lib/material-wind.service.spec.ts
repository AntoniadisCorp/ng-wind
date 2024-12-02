import { TestBed } from '@angular/core/testing';

import { MaterialWindService } from './material-wind.service';

describe('MaterialWindService', () => {
  let service: MaterialWindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialWindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
