import { Component, OnInit, Input } from '@angular/core';
import { ItemDescriptionEntity } from '../../models/Product';

@Component({
  selector: 'mr-product-highlights',
  templateUrl: './product-highlights.component.html',
  styleUrls: ['./product-highlights.component.css']
})
export class ProductHighlightsComponent implements OnInit {

  @Input('highlights') highlights: Array<ItemDescriptionEntity>;

  constructor() { }

  ngOnInit() {
    console.log(this.highlights);
  }

}
