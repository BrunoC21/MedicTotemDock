import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoneprintComponent } from './sectoneprint.component';

describe('SectoneprintComponent', () => {
  let component: SectoneprintComponent;
  let fixture: ComponentFixture<SectoneprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectoneprintComponent]
    });
    fixture = TestBed.createComponent(SectoneprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
