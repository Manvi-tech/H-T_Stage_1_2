
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'shared/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private productService:ProductService ) { }

  addProduct!: FormGroup;

  ngOnInit() {
    this.addProduct = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      category:['all', [Validators.required]],
      price:[1, [Validators.required,Validators.min(1)]],
      quantity:[1, [Validators.required,Validators.min(1)]],
      image:['Product Image'],
      rating:[3, [Validators.required, Validators.min(1), Validators.max(5)]]
    });

  }

  get id(){
    return this.addProduct.get('id');
  }

  get name(){
    return this.addProduct.get('name');
  }

  get price(){
    return this.addProduct.get('price');
  }

  get rating(){
    return this.addProduct.get('rating');
  }

  get category(){
    return this.addProduct.get('category');
  }

  get quantity(){
    return this.addProduct.get('quantity');
  }
  
  get image(){
    return this.addProduct.get('image');
  }

  onSubmit() {
    this.productService.createProduct(this.addProduct.value)
      .subscribe( data => {console.log(data);
        this.router.navigate(['']);
      });
  }

}