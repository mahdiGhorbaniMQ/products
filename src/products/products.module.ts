import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductsComponent } from './products/products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { BaseComponent } from './base/base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductsComponent,
    UpdateProductComponent,
    CreateProductComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    BaseComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]  
})
export class ProductsModule { }
