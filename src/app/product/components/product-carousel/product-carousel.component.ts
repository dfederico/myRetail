import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ImagesEntity } from '../../models/Product';
import { ModalModule, ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'mr-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

  @Input('title') productTitle: string;
  @Input('images') images: ImagesEntity;

  @ViewChild("imgModal")
  imgModal: ModalDirective;

  carouselLiveImage: string;
  carouselAltImage: string;
  carouselImages: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.populateCarouselList();
    this.setCarouselInitState();
  }

  setCarouselInitState() {
    this.carouselLiveImage = this.carouselImages[0];
    this.carouselAltImage = this.carouselImages[0];
  }

  populateCarouselList() {
    if(this.images != undefined) {
      this.carouselImages.push(this.images.PrimaryImage[0].image);
      this.images.AlternateImages.forEach(i => {
        this.carouselImages.push(i.image);
      });
    }
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

  viewLarger() {
    this.imgModal.show();
  }

}
