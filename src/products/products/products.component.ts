import { Component, OnInit } from '@angular/core';
import { ProductsControllerService } from '../controller/products-controller.service';
import { ProductModel } from '../model/product-model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:ProductModel[]=[];

  constructor(private controller:ProductsControllerService,
              private router:Router) { }

  ngOnInit(): void {
    this.products=this.controller.getProducts();
  }
  create(){
    this.router.navigate(['products/create']);
  }
  delete(product:ProductModel){
    var index = this.controller.getProductIndex(product);
    this.controller.deleteProductByIndex(index);
    this.ngOnInit();
  }
  update(product:ProductModel){
    this.controller.setCreatingItem(product);
    this.router.navigate(['products/update']);
    this.ngOnInit();
  }
}
