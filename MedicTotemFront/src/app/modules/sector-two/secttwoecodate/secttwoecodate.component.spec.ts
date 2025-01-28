import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwoecodateComponent } from './secttwoecodate.component';

describe('SecttwoecodateComponent', () => {
  let component: SecttwoecodateComponent;
  let fixture: ComponentFixture<SecttwoecodateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwoecodateComponent]
    });
    fixture = TestBed.createComponent(SecttwoecodateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
