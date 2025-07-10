import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTimelineComponent } from './mobile-timeline.component';

describe('MobileTimelineComponent', () => {
  let component: MobileTimelineComponent;
  let fixture: ComponentFixture<MobileTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileTimelineComponent]
    });
    fixture = TestBed.createComponent(MobileTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
