import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'mr-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  @Input('itemId') itemId;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.loadProduct(this.itemId);
  }

  loadProduct(itemId) {
    this.productService.getProductInfo(itemId);
  }

}
