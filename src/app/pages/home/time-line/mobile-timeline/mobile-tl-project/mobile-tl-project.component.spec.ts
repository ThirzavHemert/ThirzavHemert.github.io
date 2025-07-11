import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTlProjectComponent } from './mobile-tl-project.component';

describe('MobileTlProjectComponent', () => {
  let component: MobileTlProjectComponent;
  let fixture: ComponentFixture<MobileTlProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileTlProjectComponent]
    });
    fixture = TestBed.createComponent(MobileTlProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
