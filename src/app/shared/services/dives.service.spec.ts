import { TestBed } from '@angular/core/testing';

import { DivesService } from './dives.service';

describe('DivesService', () => {
  let service: DivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
