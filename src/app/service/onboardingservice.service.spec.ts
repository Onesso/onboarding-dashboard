import { TestBed } from '@angular/core/testing';

import { OnboardingserviceService } from './onboardingservice.service';

describe('OnboardingserviceService', () => {
  let service: OnboardingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
