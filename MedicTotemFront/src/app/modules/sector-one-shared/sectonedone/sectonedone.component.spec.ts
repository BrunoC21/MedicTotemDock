import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectonedoneComponent } from './sectonedone.component';

describe('SectonedoneComponent', () => {
  let component: SectonedoneComponent;
  let fixture: ComponentFixture<SectonedoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectonedoneComponent]
    });
    fixture = TestBed.createComponent(SectonedoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
