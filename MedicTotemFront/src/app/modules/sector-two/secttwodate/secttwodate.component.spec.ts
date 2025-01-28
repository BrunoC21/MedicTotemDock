import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwodateComponent } from './secttwodate.component';

describe('SecttwodateComponent', () => {
  let component: SecttwodateComponent;
  let fixture: ComponentFixture<SecttwodateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwodateComponent]
    });
    fixture = TestBed.createComponent(SecttwodateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
