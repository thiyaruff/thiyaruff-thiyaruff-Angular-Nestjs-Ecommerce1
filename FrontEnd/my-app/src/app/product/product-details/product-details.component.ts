import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

declare var paypal:any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('paypal',{static:true})
  paypalElement:any;
  product:any

  constructor (private activatedRoute: ActivatedRoute,
    public productService: ProductService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(url=>{

      this.productService.getProductDetailById(url['id']).
      subscribe(data=>{console.log('data',data)
      this.product=data})
    })

    paypal.Buttons({
        style:{
          shape:'rect',
          color:'gold',
          layout:'vertical',
          label:'paypal',
        },
        createOrder:(data:any,actions:any)=>{
          return actions.order.create({
            name: this.product.title,
            description:this.product.description,
            purchase_units:[{
              amount:{
                currency_code:'USD',
                value:this.product.price
              }
            }]
          })
        },
        onApprove: async(data:any, actions:any)=>{
          const order= await actions.order.capture()
          console.log ('order',order)
        },
        onCancel: (data:any, actions:any)=>{
          return actions.redirect('/')
        },
        onError:(err:any)=>{
          console.log('error:',err)
        }
    }).render(this.paypalElement.nativeElement)
  }
}
