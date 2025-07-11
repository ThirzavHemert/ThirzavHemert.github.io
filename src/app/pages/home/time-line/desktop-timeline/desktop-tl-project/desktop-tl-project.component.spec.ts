import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopTlProjectComponent } from './desktop-tl-project.component';

describe('DesktopTlProjectComponent', () => {
  let component: DesktopTlProjectComponent;
  let fixture: ComponentFixture<DesktopTlProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopTlProjectComponent]
    });
    fixture = TestBed.createComponent(DesktopTlProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
