import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanGraphComponent } from './plan-graph.component';

describe('PlanGraphComponent', () => {
  let component: PlanGraphComponent;
  let fixture: ComponentFixture<PlanGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
