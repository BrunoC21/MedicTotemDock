import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfivemordateComponent } from './sectfivemordate.component';

describe('SectfivemordateComponent', () => {
  let component: SectfivemordateComponent;
  let fixture: ComponentFixture<SectfivemordateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfivemordateComponent]
    });
    fixture = TestBed.createComponent(SectfivemordateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
