import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendChartComponentComponent } from './trend-chart-component.component';

describe('TrendChartComponentComponent', () => {
  let component: TrendChartComponentComponent;
  let fixture: ComponentFixture<TrendChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendChartComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
