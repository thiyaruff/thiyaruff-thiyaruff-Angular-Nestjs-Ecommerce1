import {HttpClient  } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
apiURL ='http://localhost:3000';

constructor(private http: HttpClient){}

getProducts(){

    return this.http.get(this.apiURL +'/product')

}

getProductsBySubCtegory(id:any){

    return this.http.get(this.apiURL +'/product/category/'+ id)
}

getProductDetailById (id:any){

    return this.http.get(this.apiURL +'/product/'+ id)
}
}