import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { HttpModule, Http } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
