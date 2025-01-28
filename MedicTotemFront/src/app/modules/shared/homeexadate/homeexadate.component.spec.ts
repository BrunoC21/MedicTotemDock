import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeexadateComponent } from './homeexadate.component';

describe('HomeexadateComponent', () => {
  let component: HomeexadateComponent;
  let fixture: ComponentFixture<HomeexadateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeexadateComponent]
    });
    fixture = TestBed.createComponent(HomeexadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
