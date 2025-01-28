import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfiveoptionComponent } from './sectfiveoption.component';

describe('SectfiveoptionComponent', () => {
  let component: SectfiveoptionComponent;
  let fixture: ComponentFixture<SectfiveoptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfiveoptionComponent]
    });
    fixture = TestBed.createComponent(SectfiveoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
