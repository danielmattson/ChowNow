import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantfinderComponent } from './restaurantfinder.component';

describe('RestaurantfinderComponent', () => {
  let component: RestaurantfinderComponent;
  let fixture: ComponentFixture<RestaurantfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
