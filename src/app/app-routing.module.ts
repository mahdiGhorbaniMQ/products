import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from 'src/products/base/base.component';

const routes: Routes = [
  {
    path:"products",
    component:BaseComponent,
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
