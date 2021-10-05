import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from 'src/products/product-container/product-container.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path:"",
    component:ProductContainerComponent
  },
  {
    path:"create",
    component:CreateProductComponent
  },
  {
    path:"update",
    component:UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
