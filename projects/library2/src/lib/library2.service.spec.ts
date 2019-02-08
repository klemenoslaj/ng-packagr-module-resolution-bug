import { TestBed } from '@angular/core/testing';

import { Library2Service } from './library2.service';

describe('Library2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Library2Service = TestBed.get(Library2Service);
    expect(service).toBeTruthy();
  });
});
