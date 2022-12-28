import { TestBed } from '@angular/core/testing';

import { ChildPresentServiceService } from './child-present-service.service';

describe('ChildPresentServiceService', () => {
  let service: ChildPresentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildPresentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
