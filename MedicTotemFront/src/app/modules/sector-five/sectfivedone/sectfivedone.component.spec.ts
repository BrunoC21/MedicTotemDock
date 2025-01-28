import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfivedoneComponent } from './sectfivedone.component';

describe('SectfivedoneComponent', () => {
  let component: SectfivedoneComponent;
  let fixture: ComponentFixture<SectfivedoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfivedoneComponent]
    });
    fixture = TestBed.createComponent(SectfivedoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
