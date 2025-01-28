import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprintComponent } from './homeprint.component';

describe('HomeprintComponent', () => {
  let component: HomeprintComponent;
  let fixture: ComponentFixture<HomeprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeprintComponent]
    });
    fixture = TestBed.createComponent(HomeprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
