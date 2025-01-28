import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfourhomeComponent } from './sectfourhome.component';

describe('SectfourhomeComponent', () => {
  let component: SectfourhomeComponent;
  let fixture: ComponentFixture<SectfourhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfourhomeComponent]
    });
    fixture = TestBed.createComponent(SectfourhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
