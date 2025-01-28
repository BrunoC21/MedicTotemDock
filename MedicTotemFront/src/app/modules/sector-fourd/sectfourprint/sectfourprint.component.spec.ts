import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfourprintComponent } from './sectfourprint.component';

describe('SectfourprintComponent', () => {
  let component: SectfourprintComponent;
  let fixture: ComponentFixture<SectfourprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfourprintComponent]
    });
    fixture = TestBed.createComponent(SectfourprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
