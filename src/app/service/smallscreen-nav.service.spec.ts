import { TestBed } from '@angular/core/testing';

import { SmallscreenNavService } from './smallscreen-nav.service';

describe('SmallscreenNavService', () => {
  let service: SmallscreenNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmallscreenNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
