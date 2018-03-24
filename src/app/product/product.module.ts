import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductHighlightsComponent } from './components/product-highlights/product-highlights.component';
import { ProductPromotionsComponent } from './components/product-promotions/product-promotions.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';

// services
import { ProductService } from './services/product.service';

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
  providers: [
    ProductService
  ],
  exports: [
    ProductContainerComponent
  ]
})
export class ProductModule { }
