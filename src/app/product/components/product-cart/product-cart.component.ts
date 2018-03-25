import { Component, OnInit, Input } from '@angular/core';
import { ReturnPolicyEntity } from '../../models/Product';

@Component({
  selector: 'mr-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  @Input("purchasingChannelCode") purchasingChannelCode: number;
  @Input("returns") returns: ReturnPolicyEntity;
 
  quantity: number;

  constructor() { }

  ngOnInit() {
    this.quantity = 1;
  }

  addToRegistry() {
    console.log("placeholder for add to registry functionality");
  }

  addToList() {
    console.log("placeholder for add to list functionality");
  }

  share() {
    console.log("placeholder for share functionality");
  }

  findInStore() {
    console.log("placeholder for find in store functionality");
  }

  pickUpInStore() {
    console.log("placeholder for pick up in store functionality");
  }

  addToCart() {
    console.log("placeholder for add to cart functionality");
  }

  updateQuantity(num: number) {
    this.quantity += num;
    if (this.quantity < 1) {
      this.quantity = 1;
    }
  }

}
