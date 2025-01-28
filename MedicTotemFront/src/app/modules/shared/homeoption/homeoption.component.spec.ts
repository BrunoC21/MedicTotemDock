import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeoptionComponent } from './homeoption.component';

describe('HomeoptionComponent', () => {
  let component: HomeoptionComponent;
  let fixture: ComponentFixture<HomeoptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeoptionComponent]
    });
    fixture = TestBed.createComponent(HomeoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
