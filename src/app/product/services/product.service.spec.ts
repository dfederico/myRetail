import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Http }from '@angular/http';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, {provide: Http, usevalue: {} }],
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
