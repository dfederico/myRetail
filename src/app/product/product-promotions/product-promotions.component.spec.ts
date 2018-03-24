import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPromotionsComponent } from './product-promotions.component';

describe('ProductPromotionsComponent', () => {
  let component: ProductPromotionsComponent;
  let fixture: ComponentFixture<ProductPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
