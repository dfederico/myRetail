import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductHighlightsComponent } from './product-highlights/product-highlights.component';
import { ProductPromotionsComponent } from './product-promotions/product-promotions.component';
import { ProductContainerComponent } from './product-container/product-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductCarouselComponent, 
    ProductReviewsComponent, 
    ProductCartComponent, 
    ProductHighlightsComponent, 
    ProductPromotionsComponent, 
    ProductContainerComponent
  ],
  exports: [
    ProductContainerComponent
  ]
})
export class ProductModule { }
