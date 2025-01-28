import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfivedateComponent } from './sectfivedate.component';

describe('SectfivedateComponent', () => {
  let component: SectfivedateComponent;
  let fixture: ComponentFixture<SectfivedateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfivedateComponent]
    });
    fixture = TestBed.createComponent(SectfivedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
