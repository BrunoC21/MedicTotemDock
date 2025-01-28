import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreendatetwoComponent } from './screendatetwo.component';

describe('ScreendatetwoComponent', () => {
  let component: ScreendatetwoComponent;
  let fixture: ComponentFixture<ScreendatetwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreendatetwoComponent]
    });
    fixture = TestBed.createComponent(ScreendatetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
