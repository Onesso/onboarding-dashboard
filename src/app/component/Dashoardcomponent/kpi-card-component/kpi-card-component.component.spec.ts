import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiCardComponentComponent } from './kpi-card-component.component';

describe('KpiCardComponentComponent', () => {
  let component: KpiCardComponentComponent;
  let fixture: ComponentFixture<KpiCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
