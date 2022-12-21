import { TestBed } from '@angular/core/testing';

import { profdata } from './profdata';

describe('ProfdataTsService', () => {
  let service: profdata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(profdata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
