import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'shared/product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

  constructor(private productService:ProductService,private router:Router){ }

  sub !:Subscription;
  products: IProduct[]=[];
  href:string='';

  selectedProduct!:IProduct | null;

  ngOnInit(): void {
    this.href=this.router.url;
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

       this.productService.selectedProductChanges$.
       subscribe(currentProduct=>{
          this.selectedProduct = currentProduct;
          console.log(this.selectedProduct);
       });

     }

     newProduct():void{
      console.log('in new product');
    
      this.productService.changeSelectedProduct(this.productService.newProduct());
      console.log('back to newProduct from service ');
    
       this.router.navigate([this.href,'addProduct']);
    }

     ngOnDestroy(): void {
        this.sub.unsubscribe();
     }
}
