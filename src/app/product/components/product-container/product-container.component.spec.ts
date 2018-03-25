import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FakeProductService } from '../../utilities/testing/fakeproduct.service';

import { ProductContainerComponent } from './product-container.component';


describe('ProductContainerComponent', () => {
  let component: ProductContainerComponent;
  let fixture: ComponentFixture<ProductContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductContainerComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        ProductService
      ]
    }).overrideComponent(ProductContainerComponent, {
        set: {
            providers: [
              { provide: ProductService, useClass: FakeProductService }
            ]
        }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
