import { Component, OnInit, Input } from '@angular/core';
import { ImagesEntity } from '../../models/Product';

@Component({
  selector: 'mr-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

  @Input('title') productTitle: string;
  @Input('images') images: ImagesEntity;

  carouselLiveImage: string;
  carouselAltImage: string;
  carouselImages: Array<string> = [];

  constructor() { }

  ngOnInit() {
    console.log(this.images);
    this.populateCarouselList();
    this.setCarouselInitState();
  }

  setCarouselInitState() {
    this.carouselLiveImage = this.carouselImages[0];
    this.carouselAltImage = this.carouselImages[0];
  }

  populateCarouselList() {
    this.carouselImages.push(this.images[0].PrimaryImage[0].image);
    this.images[0].AlternateImages.forEach(i => {
      this.carouselImages.push(i.image);
    });
  }

  navigatePrimary(selectedImage) {
    this.carouselLiveImage = selectedImage;
  }

  previous() {
    this.carouselAltImage = this.getLeftAlt();
  }

  next() {
    this.carouselAltImage = this.getRightAlt();
  }

  getLeftAlt() {
    if (this.carouselImages.indexOf(this.carouselAltImage) - 1 < 1) {
      return this.carouselImages[this.carouselImages.length - 1];
    }
    else {
      return this.carouselImages[this.carouselImages.indexOf(this.carouselAltImage) - 1];
    }
  }

  getRightAlt() {
    if (this.carouselImages.indexOf(this.carouselAltImage) + 1 == this.carouselImages.length) {
      return this.carouselImages[0];
    }
    else {
      return this.carouselImages[this.carouselImages.indexOf(this.carouselAltImage) + 1];
    }
  }

}
