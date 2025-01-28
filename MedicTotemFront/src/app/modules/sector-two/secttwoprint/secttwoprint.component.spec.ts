import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwoprintComponent } from './secttwoprint.component';

describe('SecttwoprintComponent', () => {
  let component: SecttwoprintComponent;
  let fixture: ComponentFixture<SecttwoprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwoprintComponent]
    });
    fixture = TestBed.createComponent(SecttwoprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
