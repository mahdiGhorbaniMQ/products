import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsInformationService {
  products:ProductModel[]=[];
  creatingItem!:ProductModel;
  constructor() { 
    this.products=[
      {
        id:0,
        title:"1",
        imgSrc:null,
        price:99.99,
        count:20,
      },
      {
        id:1,
        title:"2",
        imgSrc:null,
        price:80.80,
        count:30,
      },
      {
        id:2,
        title:"3",
        imgSrc:null,
        price:12.00,
        count:11,
      },
      {
        id:3,
        title:"4",
        imgSrc:null,
        price:16.16,
        count:16,
      },
      {
        id:4,
        title:"5",
        imgSrc:null,
        price:80.00,
        count:12,
      }
    ];
  }
}
