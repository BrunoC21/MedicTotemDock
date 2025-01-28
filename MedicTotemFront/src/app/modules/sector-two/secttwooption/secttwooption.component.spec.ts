import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwooptionComponent } from './secttwooption.component';

describe('SecttwooptionComponent', () => {
  let component: SecttwooptionComponent;
  let fixture: ComponentFixture<SecttwooptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwooptionComponent]
    });
    fixture = TestBed.createComponent(SecttwooptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
