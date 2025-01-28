import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfiveeledateComponent } from './sectfiveeledate.component';

describe('SectfiveeledateComponent', () => {
  let component: SectfiveeledateComponent;
  let fixture: ComponentFixture<SectfiveeledateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfiveeledateComponent]
    });
    fixture = TestBed.createComponent(SectfiveeledateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
