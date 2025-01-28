import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectfourdateComponent } from './sectfourdate.component';

describe('SectfourdateComponent', () => {
  let component: SectfourdateComponent;
  let fixture: ComponentFixture<SectfourdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectfourdateComponent]
    });
    fixture = TestBed.createComponent(SectfourdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
