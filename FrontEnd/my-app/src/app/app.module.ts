import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductBagsComponent } from './product/product-bags/product-bags.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductBagsComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
