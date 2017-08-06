import { TestBed, inject } from '@angular/core/testing';

import { ContentHandlerService } from './content-handler.service';

describe('ContentHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentHandlerService]
    });
  });

  it('should be created', inject([ContentHandlerService], (service: ContentHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
