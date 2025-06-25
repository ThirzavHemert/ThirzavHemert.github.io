import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineProjectComponent } from './timeline-project.component';

describe('TimelineProjectComponent', () => {
  let component: TimelineProjectComponent;
  let fixture: ComponentFixture<TimelineProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineProjectComponent]
    });
    fixture = TestBed.createComponent(TimelineProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
