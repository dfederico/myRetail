import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductCartComponent } from './product-cart.component';

describe('ProductCartComponent', () => {
  let component: ProductCartComponent;
  let fixture: ComponentFixture<ProductCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should validate that quantity can never go below 1', () => {
    
    component.updateQuantity(-84);
    expect(component.quantity).toBe(1);

    component.updateQuantity(3);
    expect(component.quantity).toBe(4);
  });

  it('should not display pickup in store if code is not 0 or 2', () => {
    component.purchasingChannelCode = 1;
    fixture.detectChanges();
    let pickUpInStore = fixture.debugElement.query(By.css('.cart-in-store'));
    let addToCart = fixture.debugElement.query(By.css('.cart-online'));

    expect(pickUpInStore).toBe(null);
    expect(addToCart).not.toBe(null);
  });

  it('should not display add to cart if code is not 0 or 1', () => {
    component.purchasingChannelCode = 2;
    fixture.detectChanges();
    let pickUpInStore = fixture.debugElement.query(By.css('.cart-in-store'));
    let addToCart = fixture.debugElement.query(By.css('.cart-online'));

    expect(pickUpInStore).not.toBe(null);
    expect(addToCart).toBe(null);
  });

  it('should display both add to cart and pickup in store', () => {
    component.purchasingChannelCode = 0;
    fixture.detectChanges();
    let pickUpInStore = fixture.debugElement.query(By.css('.cart-in-store'));
    let addToCart = fixture.debugElement.query(By.css('.cart-online'));

    expect(pickUpInStore).toBe(null);
    expect(addToCart).toBe(null);
  });

  it('should display neither add to cart nor pickup in store', () => {
    component.purchasingChannelCode = 99;
    fixture.detectChanges();
    let pickUpInStore = fixture.debugElement.query(By.css('.cart-in-store'));
    let addToCart = fixture.debugElement.query(By.css('.cart-online'));

    expect(pickUpInStore).toBe(null);
    expect(addToCart).toBe(null);
  });
});
