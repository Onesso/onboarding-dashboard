import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestOnboardingTableComponentComponent } from './latest-onboarding-table-component.component';

describe('LatestOnboardingTableComponentComponent', () => {
  let component: LatestOnboardingTableComponentComponent;
  let fixture: ComponentFixture<LatestOnboardingTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestOnboardingTableComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestOnboardingTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
