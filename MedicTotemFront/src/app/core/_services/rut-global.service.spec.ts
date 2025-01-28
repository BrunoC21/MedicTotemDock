import { TestBed } from '@angular/core/testing';

import { RutGlobalService } from './rut-global.service';

describe('RutGlobalService', () => {
  let service: RutGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
