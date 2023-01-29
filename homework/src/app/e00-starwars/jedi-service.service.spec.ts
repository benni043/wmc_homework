import { TestBed } from '@angular/core/testing';

import { JediServiceService } from './jedi-service.service';

describe('JediServiceService', () => {
  let service: JediServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JediServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
