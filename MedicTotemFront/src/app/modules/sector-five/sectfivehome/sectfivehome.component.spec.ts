import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfivehomeComponent } from './sectfivehome.component';

describe('SectfivehomeComponent', () => {
  let component: SectfivehomeComponent;
  let fixture: ComponentFixture<SectfivehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfivehomeComponent]
    });
    fixture = TestBed.createComponent(SectfivehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
