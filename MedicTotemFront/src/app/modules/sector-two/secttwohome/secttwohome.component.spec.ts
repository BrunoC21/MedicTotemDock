import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttwohomeComponent } from './secttwohome.component';

describe('SecttwohomeComponent', () => {
  let component: SecttwohomeComponent;
  let fixture: ComponentFixture<SecttwohomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttwohomeComponent]
    });
    fixture = TestBed.createComponent(SecttwohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
