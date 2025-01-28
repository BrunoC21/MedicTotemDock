import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwocuraComponent } from './secttwocura.component';

describe('SecttwocuraComponent', () => {
  let component: SecttwocuraComponent;
  let fixture: ComponentFixture<SecttwocuraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwocuraComponent]
    });
    fixture = TestBed.createComponent(SecttwocuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
