import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfiveiradateComponent } from './sectfiveiradate.component';

describe('SectfiveiradateComponent', () => {
  let component: SectfiveiradateComponent;
  let fixture: ComponentFixture<SectfiveiradateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfiveiradateComponent]
    });
    fixture = TestBed.createComponent(SectfiveiradateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
