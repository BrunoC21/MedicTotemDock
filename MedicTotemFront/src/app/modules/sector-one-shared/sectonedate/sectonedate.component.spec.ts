import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectonedateComponent } from './sectonedate.component';

describe('SectonedateComponent', () => {
  let component: SectonedateComponent;
  let fixture: ComponentFixture<SectonedateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectonedateComponent]
    });
    fixture = TestBed.createComponent(SectonedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
