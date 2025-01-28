import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwoeradateComponent } from './secttwoeradate.component';

describe('SecttwoeradateComponent', () => {
  let component: SecttwoeradateComponent;
  let fixture: ComponentFixture<SecttwoeradateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwoeradateComponent]
    });
    fixture = TestBed.createComponent(SecttwoeradateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
