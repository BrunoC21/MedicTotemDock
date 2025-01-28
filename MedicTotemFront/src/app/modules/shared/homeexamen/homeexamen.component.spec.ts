import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeexamenComponent } from './homeexamen.component';

describe('HomeexamenComponent', () => {
  let component: HomeexamenComponent;
  let fixture: ComponentFixture<HomeexamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeexamenComponent]
    });
    fixture = TestBed.createComponent(HomeexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
