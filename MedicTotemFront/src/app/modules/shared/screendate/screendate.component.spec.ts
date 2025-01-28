import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreendateComponent } from './screendate.component';

describe('ScreendateComponent', () => {
  let component: ScreendateComponent;
  let fixture: ComponentFixture<ScreendateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreendateComponent]
    });
    fixture = TestBed.createComponent(ScreendateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
