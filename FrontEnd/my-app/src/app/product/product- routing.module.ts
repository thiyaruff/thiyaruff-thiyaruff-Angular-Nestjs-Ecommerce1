import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductHomeComponent } from "./product-home/product-home.component";
import { ProductBagsComponent } from "./product-bags/product-bags.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { SubCategoryComponent } from "./sub-category/sub-category.component";

const routes: Routes= [

{
    path:'bags/:id',
    component: SubCategoryComponent

},
{
    path:'',
    component: ProductHomeComponent

},

{
    path:'bags',
    component: ProductBagsComponent
    
},
{
    path:'bags/1',
    component: ProductDetailsComponent
        
}

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class ProductRoutingModule {}