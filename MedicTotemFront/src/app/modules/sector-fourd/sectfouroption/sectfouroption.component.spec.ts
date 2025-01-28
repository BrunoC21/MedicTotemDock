import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfouroptionComponent } from './sectfouroption.component';

describe('SectfouroptionComponent', () => {
  let component: SectfouroptionComponent;
  let fixture: ComponentFixture<SectfouroptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfouroptionComponent]
    });
    fixture = TestBed.createComponent(SectfouroptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
