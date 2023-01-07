import { TestBed } from '@angular/core/testing';

import { SpecialiteService } from './Specialite.service';

describe('villeService', () => {
  let service: SpecialiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
