import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewsComponent } from './product-reviews.component';

describe('ProductReviewsComponent', () => {
  let component: ProductReviewsComponent;
  let fixture: ComponentFixture<ProductReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should determine the correct amount of stars', () => {
    let arr = component.calculateStars(3);
    expect(arr[0]).toBe(true);
    expect(arr[1]).toBe(true);
    expect(arr[2]).toBe(true);
    expect(arr[3]).toBe(false);
    expect(arr[4]).toBe(false);
  });
});
