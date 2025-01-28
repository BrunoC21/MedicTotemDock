import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfourivadateComponent } from './sectfourivadate.component';

describe('SectfourivadateComponent', () => {
  let component: SectfourivadateComponent;
  let fixture: ComponentFixture<SectfourivadateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfourivadateComponent]
    });
    fixture = TestBed.createComponent(SectfourivadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
