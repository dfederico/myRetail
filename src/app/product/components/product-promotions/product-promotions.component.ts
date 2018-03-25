import { Component, OnInit, Input } from '@angular/core';
import { PromotionsEntity } from '../../models/Product';

@Component({
  selector: 'mr-product-promotions',
  templateUrl: './product-promotions.component.html',
  styleUrls: ['./product-promotions.component.css']
})
export class ProductPromotionsComponent implements OnInit {

  @Input('promotions') promotions: Array<PromotionsEntity>;
  
  constructor() { }

  ngOnInit() {
    console.log(this.promotions);
  }

}
