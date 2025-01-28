import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedoneComponent } from './homedone.component';

describe('HomedoneComponent', () => {
  let component: HomedoneComponent;
  let fixture: ComponentFixture<HomedoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedoneComponent]
    });
    fixture = TestBed.createComponent(HomedoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
