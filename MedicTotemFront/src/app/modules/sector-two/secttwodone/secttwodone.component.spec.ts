import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwodoneComponent } from './secttwodone.component';

describe('SecttwodoneComponent', () => {
  let component: SecttwodoneComponent;
  let fixture: ComponentFixture<SecttwodoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwodoneComponent]
    });
    fixture = TestBed.createComponent(SecttwodoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
