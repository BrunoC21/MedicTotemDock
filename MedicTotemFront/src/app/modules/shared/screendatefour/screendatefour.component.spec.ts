import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreendatefourComponent } from './screendatefour.component';

describe('ScreendatefourComponent', () => {
  let component: ScreendatefourComponent;
  let fixture: ComponentFixture<ScreendatefourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreendatefourComponent]
    });
    fixture = TestBed.createComponent(ScreendatefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
