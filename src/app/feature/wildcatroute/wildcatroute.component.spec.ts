import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcatrouteComponent } from './wildcatroute.component';

describe('WildcatrouteComponent', () => {
  let component: WildcatrouteComponent;
  let fixture: ComponentFixture<WildcatrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildcatrouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildcatrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
