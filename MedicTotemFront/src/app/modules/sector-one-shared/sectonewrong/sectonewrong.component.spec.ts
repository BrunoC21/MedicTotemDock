import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectonewrongComponent } from './sectonewrong.component';

describe('SectonewrongComponent', () => {
  let component: SectonewrongComponent;
  let fixture: ComponentFixture<SectonewrongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectonewrongComponent]
    });
    fixture = TestBed.createComponent(SectonewrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
