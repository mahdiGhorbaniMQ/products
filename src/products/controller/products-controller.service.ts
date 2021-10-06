import { Injectable } from '@angular/core';
import { ProductsInformationService } from '../information/products-information.service';
import { ProductModel } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsControllerService {

  constructor(private information:ProductsInformationService) { }
  getProducts():ProductModel[]{
    if(localStorage.getItem('products')){
      this.information.products=JSON.parse(localStorage.getItem('products')!);
    }
    return this.information.products;
  }
  updateProductsByIndex(index:number, newProductData:ProductModel){
    this.information.products[index]=newProductData;
    localStorage.setItem('products', JSON.stringify(this.information.products));
  }
  deleteProductByIndex(index:number){
    this.information.products.splice(index,1)
    localStorage.setItem('products', JSON.stringify(this.information.products));
  }
  createProduct(productData:ProductModel){
    this.information.products.push(productData);
    localStorage.setItem('products', JSON.stringify(this.information.products));
  }
  getProductIndex(product:ProductModel):number{
    
    var res=-1;
    this.information.products.forEach((element, index) => {
      if(element.id==product.id)
       res=index;
    });
    
    return res;
  }
  setCreatingItem(product:ProductModel){
    this.information.creatingItem=product;
  }

  getCreatingItem():ProductModel{
    return this.information.creatingItem;
  }
  generateNewId():number{
    var id=1;
    if (this.information.products.length>0)
      id = this.information.products[this.information.products.length-1].id+1;
    return id;
  }
}
