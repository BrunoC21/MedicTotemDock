import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfourwrongComponent } from './sectfourwrong.component';

describe('SectfourwrongComponent', () => {
  let component: SectfourwrongComponent;
  let fixture: ComponentFixture<SectfourwrongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfourwrongComponent]
    });
    fixture = TestBed.createComponent(SectfourwrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
