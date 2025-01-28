import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfourdoneComponent } from './sectfourdone.component';

describe('SectfourdoneComponent', () => {
  let component: SectfourdoneComponent;
  let fixture: ComponentFixture<SectfourdoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfourdoneComponent]
    });
    fixture = TestBed.createComponent(SectfourdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
