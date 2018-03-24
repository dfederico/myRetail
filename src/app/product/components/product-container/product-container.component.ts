import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CatalogEntryViewEntity } from '../../models/Product';
import { ProductObject } from '../../models/Product';

@Component({
  selector: 'mr-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  @Input('itemId') itemId;
  product: CatalogEntryViewEntity;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.loadProduct(this.itemId);
  }

  loadProduct(itemId) {
    this.productService.getProductInfo(itemId).subscribe(
      success => {
        let resp: ProductObject = success.json();
        this.product = resp.CatalogEntryView[0];
      },
      error => console.log(error)
    )
  }

}
