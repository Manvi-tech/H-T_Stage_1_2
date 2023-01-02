import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/shared/product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

  constructor(private productService:ProductService,private router:Router){ }

  sub !:Subscription;
  products !: IProduct[];

  ngOnInit(): void {
    // this.href=this.router.url;
    // console.log(this.href);
    //sub object is initialized
       this.sub =this.productService.getProducts().subscribe((response)=>{
         console.log(response);
         this.products=response;
        //  this.filteredProducts = this.products;
       },
       err=>{
        // this.errorMessage=err;
        console.log(err);
       }
       );

      //  this.productService.selectedProductChanges$.
      //  subscribe(currentProduct=>{this.selectedProduct=currentProduct;
      //  console.log(this.selectedProduct);
      //  });

     }

     ngOnDestroy(): void {
        this.sub.unsubscribe();
      }
}
