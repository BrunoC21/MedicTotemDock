import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoneoptionComponent } from './sectoneoption.component';

describe('SectoneoptionComponent', () => {
  let component: SectoneoptionComponent;
  let fixture: ComponentFixture<SectoneoptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectoneoptionComponent]
    });
    fixture = TestBed.createComponent(SectoneoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
