import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomealimentosComponent } from './homealimentos.component';

describe('HomealimentosComponent', () => {
  let component: HomealimentosComponent;
  let fixture: ComponentFixture<HomealimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomealimentosComponent]
    });
    fixture = TestBed.createComponent(HomealimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
