import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfourcuradateComponent } from './sectfourcuradate.component';

describe('SectfourcuradateComponent', () => {
  let component: SectfourcuradateComponent;
  let fixture: ComponentFixture<SectfourcuradateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfourcuradateComponent]
    });
    fixture = TestBed.createComponent(SectfourcuradateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
