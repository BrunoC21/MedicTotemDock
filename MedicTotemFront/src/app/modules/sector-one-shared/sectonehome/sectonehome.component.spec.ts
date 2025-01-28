import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectonehomeComponent } from './sectonehome.component';

describe('SectonehomeComponent', () => {
  let component: SectonehomeComponent;
  let fixture: ComponentFixture<SectonehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectonehomeComponent]
    });
    fixture = TestBed.createComponent(SectonehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
