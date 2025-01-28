import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediclistComponent } from './mediclist.component';

describe('MediclistComponent', () => {
  let component: MediclistComponent;
  let fixture: ComponentFixture<MediclistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediclistComponent]
    });
    fixture = TestBed.createComponent(MediclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
