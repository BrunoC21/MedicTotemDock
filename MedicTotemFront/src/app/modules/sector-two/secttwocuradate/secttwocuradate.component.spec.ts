import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwocuradateComponent } from './secttwocuradate.component';

describe('SecttwocuradateComponent', () => {
  let component: SecttwocuradateComponent;
  let fixture: ComponentFixture<SecttwocuradateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwocuradateComponent]
    });
    fixture = TestBed.createComponent(SecttwocuradateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
