import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfivewrongComponent } from './sectfivewrong.component';

describe('SectfivewrongComponent', () => {
  let component: SectfivewrongComponent;
  let fixture: ComponentFixture<SectfivewrongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfivewrongComponent]
    });
    fixture = TestBed.createComponent(SectfivewrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
