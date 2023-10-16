import { TestBed } from '@angular/core/testing';

import { UserGETAPIService } from './user-getapi.service';

describe('UserGETAPIService', () => {
  let service: UserGETAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGETAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
