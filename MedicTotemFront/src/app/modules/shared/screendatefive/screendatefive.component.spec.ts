import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreendatefiveComponent } from './screendatefive.component';

describe('ScreendatefiveComponent', () => {
  let component: ScreendatefiveComponent;
  let fixture: ComponentFixture<ScreendatefiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreendatefiveComponent]
    });
    fixture = TestBed.createComponent(ScreendatefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
