import { Component, OnInit, Input } from '@angular/core';
import { OfferPriceEntity } from '../../models/Product';

@Component({
  selector: 'mr-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

@Input("offers") offers: OfferPriceEntity;

  constructor() { }

  ngOnInit() {

  }

}
