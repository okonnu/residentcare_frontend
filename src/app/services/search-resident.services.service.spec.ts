import { TestBed } from '@angular/core/testing';

import { SearchResidentServicesService } from './search-resident.services.service';

describe('SearchResidentServicesService', () => {
  let service: SearchResidentServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResidentServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
