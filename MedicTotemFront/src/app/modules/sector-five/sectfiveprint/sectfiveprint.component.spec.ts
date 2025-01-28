import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfiveprintComponent } from './sectfiveprint.component';

describe('SectfiveprintComponent', () => {
  let component: SectfiveprintComponent;
  let fixture: ComponentFixture<SectfiveprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfiveprintComponent]
    });
    fixture = TestBed.createComponent(SectfiveprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
