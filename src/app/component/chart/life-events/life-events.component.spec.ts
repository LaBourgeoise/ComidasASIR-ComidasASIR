
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeEventsComponent } from './life-events.component';

describe('LifeEventsComponent', () => {
  let component: LifeEventsComponent;
  let fixture: ComponentFixture<LifeEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});