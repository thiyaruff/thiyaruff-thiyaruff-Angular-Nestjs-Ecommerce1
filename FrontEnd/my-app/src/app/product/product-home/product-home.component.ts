import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit{
  product:any;
constructor(public productService: ProductService){}

ngOnInit(): void {
  this.loadProducts()
}
loadProducts(){

  return this.productService.getProducts().subscribe(
    (data:any)=>this.product=data
  )
}
}
