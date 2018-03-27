import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagesEntity, AlternateImagesEntityOrPrimaryImageEntity } from '../../models/Product';
import { ProductCarouselComponent } from './product-carousel.component';
import { ModalModule } from 'ngx-bootstrap';

describe('ProductCarouselComponent', () => {
  let component: ProductCarouselComponent;
  let fixture: ComponentFixture<ProductCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCarouselComponent ],
      imports: [ModalModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should validate alt image goes around the horn', () => {
    component.carouselImages = ['one', 'two', 'three', 'four'];
    fixture.detectChanges();
    expect(component.carouselLiveImage).toBe('one');
    expect(component.carouselAltImage).toBe('one');
    component.previous();
    component.previous();
    expect(component.carouselAltImage).toBe('three');
    component.next();
    expect(component.carouselAltImage).toBe('four');
  });

  it('should set the primary image when an alt image is clicked', () => {
    component.carouselImages = ['one', 'two', 'three', 'four'];
    fixture.detectChanges();
    component.navigatePrimary('three');
    expect(component.carouselLiveImage).toBe('three');
  });

  it('should use the dummy data to set the carouselImages', () => {
    expect(component.carouselImages.length).toBe(0);
    console.log(dummy.Images[0]);
    component.images = dummy.Images[0];
    fixture.detectChanges();
    expect(component.carouselImages.length).toBe(5);
  });
});

var dummy = { "Images": [
  {
   "AlternateImages": [
    {
     "image": "one"
    },
    {
     "image": "two"
    },
    {
     "image": "three"
    },
    {
     "image": "four"
    },
   ],
   "PrimaryImage": [
    {
     "image": "primary"
    }
   ],

   "imageCount": "6",
   "source": "external"
  }
 ]
}