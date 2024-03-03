import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRoutingModule } from './product- routing.module';
import { TitleTransformPipe } from './title.transform.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductBagsComponent } from './product-bags/product-bags.component';



@NgModule({
  declarations: [
    ProductHomeComponent,
    TitleTransformPipe,
    ProductDetailsComponent,
    ProductBagsComponent,
    SubCategoryComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule

  ]
})
export class ProductModule { }
