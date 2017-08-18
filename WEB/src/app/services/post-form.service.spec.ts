import { TestBed, inject } from '@angular/core/testing';

import { PostFormService } from './post-form.service';

describe('PostFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostFormService]
    });
  });

  it('should be created', inject([PostFormService], (service: PostFormService) => {
    expect(service).toBeTruthy();
  }));
});
