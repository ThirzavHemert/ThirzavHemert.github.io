import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopTimelineComponent } from './desktop-timeline.component';

describe('DesktopTimelineComponent', () => {
  let component: DesktopTimelineComponent;
  let fixture: ComponentFixture<DesktopTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopTimelineComponent]
    });
    fixture = TestBed.createComponent(DesktopTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
