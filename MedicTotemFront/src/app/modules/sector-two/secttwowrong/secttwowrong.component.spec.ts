import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwowrongComponent } from './secttwowrong.component';

describe('SecttwowrongComponent', () => {
  let component: SecttwowrongComponent;
  let fixture: ComponentFixture<SecttwowrongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwowrongComponent]
    });
    fixture = TestBed.createComponent(SecttwowrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
