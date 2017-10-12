import { TestBed, inject } from '@angular/core/testing';

import { FetchInfoFromDbService } from './fetch-info-from-db.service';

describe('FetchInfoFromDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchInfoFromDbService]
    });
  });

  it('should be created', inject([FetchInfoFromDbService], (service: FetchInfoFromDbService) => {
    expect(service).toBeTruthy();
  }));
});
