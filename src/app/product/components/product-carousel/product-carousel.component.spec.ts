import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarouselComponent } from './product-carousel.component';

describe('ProductCarouselComponent', () => {
  let component: ProductCarouselComponent;
  let fixture: ComponentFixture<ProductCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should validate alt image goes around the horn', () => {
    component.carouselImages = ['one', 'two', 'three', 'four'];
    fixture.detectChanges();
    expect(component.carouselLiveImage).toBe('one');
    // expect(1).toBe('zero');
  });
});
