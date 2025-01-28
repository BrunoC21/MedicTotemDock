import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeradiodateComponent } from './homeradiodate.component';

describe('HomeradiodateComponent', () => {
  let component: HomeradiodateComponent;
  let fixture: ComponentFixture<HomeradiodateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeradiodateComponent]
    });
    fixture = TestBed.createComponent(HomeradiodateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
