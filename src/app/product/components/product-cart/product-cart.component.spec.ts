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
    fixture.detectChanges();
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

    expect(pickUpInStore).not.toBe(null);
    expect(addToCart).not.toBe(null);
  });

  it('should display neither add to cart nor pickup in store', () => {
    component.purchasingChannelCode = 99;
    fixture.detectChanges();
    let pickUpInStore = fixture.debugElement.query(By.css('.cart-in-store'));
    let addToCart = fixture.debugElement.query(By.css('.cart-online'));

    expect(pickUpInStore).toBe(null);
    expect(addToCart).toBe(null);
  });

  it('should trigger the find in store/pick up in store/add to cart functions', () => {
    spyOn(component, 'findInStore');
    spyOn(component, 'pickUpInStore');
    spyOn(component, 'addToCart');

    component.purchasingChannelCode = 0;
    fixture.detectChanges();

    let findInStore = fixture.debugElement.query(By.css('.find-in-store'));
    let pickUpInStore = fixture.debugElement.query(By.css('.in-store-button'));
    let addToCart = fixture.debugElement.query(By.css('.online-button'));

    findInStore.nativeElement.click();
    expect(component.findInStore).toHaveBeenCalled();

    pickUpInStore.nativeElement.click();
    expect(component.pickUpInStore).toHaveBeenCalled();

    addToCart.nativeElement.click();
    expect(component.addToCart).toHaveBeenCalled();
  });

  it('should trigger the social buttons', () => {
    spyOn(component, 'addToRegistry');
    spyOn(component, 'addToList');
    spyOn(component, 'share');

    fixture.detectChanges();

    let buttons = fixture.debugElement.query(By.css('.cart-social-buttons button'));

    let registry = fixture.debugElement.query(By.css('.registry-button'));
    let list = fixture.debugElement.query(By.css('.list-button'));
    let share = fixture.debugElement.query(By.css('.share-button'));

    registry.nativeElement.click();
    expect(component.addToRegistry).toHaveBeenCalled();

    list.nativeElement.click();
    expect(component.addToList).toHaveBeenCalled();

    share.nativeElement.click();
    expect(component.share).toHaveBeenCalled();
  });

});
