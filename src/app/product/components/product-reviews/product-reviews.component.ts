import { Component, OnInit, Input } from '@angular/core';
import { ReviewsEntity } from '../../models/Product';

@Component({
  selector: 'mr-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

  @Input("review") review: ReviewsEntity;
  starTotal: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.starTotal = this.calculateStars(parseInt(this.review[0].consolidatedOverallRating));
    console.log(this.review);
  }

  calculateStars(star: number) {
    let arr = [];
    
    for (let i = 0; i < 5; i++) {
      if (star > i) {
        arr.push(true);
      }
      else {
        arr.push(false);
      }
    }
    return arr;
  }

}
