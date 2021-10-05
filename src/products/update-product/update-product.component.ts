import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsControllerService } from '../controller/products-controller.service';
import { ProductModel } from '../model/product-model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private builder: FormBuilder,
    private controller:ProductsControllerService,
    private router:Router) { }

  title!:FormControl;
  imgSrc!:FormControl;
  price!:FormControl;
  count!:FormControl;
  form!: FormGroup;
  index = this.controller.getProductIndex(this.controller.getCreatingItem())
  prouctData:ProductModel=this.controller.getCreatingItem();
  priceRegex = /[0-9][0-9]\.[0-9][0-9]/;
  countRegex = /([0-9][0-9])/;
  ngOnInit(): void {
    this.title= new FormControl(this.prouctData.title, [
    Validators.required,
    ]);
    this.price= new FormControl(this.prouctData.price, [
    Validators.required,
    Validators.pattern(this.priceRegex),
    ]),
    this.count= new FormControl(this.prouctData.count, [
    Validators.required,
    Validators.pattern(this.countRegex),
    Validators.maxLength(2)
    ])
    this.form = this.builder.group({  
    title: this.title,  
    imgSrc: this.imgSrc, 
    count: this.count,  
    price: this.price  
    });   
  }
  create(){
    var product:ProductModel={
      id:this.controller.generateNewId(),
      title:this.title.value,
      imgSrc:null,
      price:this.price.value,
      count:this.count.value,
    }
    this.controller.updateProductsByIndex(this.index,product);
    this.router.navigate(['products'])
  }
}
