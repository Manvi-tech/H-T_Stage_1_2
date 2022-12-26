import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
    
  productsList:IProduct[]= [
      {
        id:1,
        name:'wdnwmdn',
        quantity:0
      },
      {
        id:13,
        name:'sndmsdn',
        quantity:0
      },
      {
        id:12,
        name:'smndmns',
        quantity:0
      }

  ]

  @Output() emitProduct:EventEmitter<IProduct> = new EventEmitter<IProduct>();

  findIndexOfProd(p:IProduct):number{
    let index = this.productsList.findIndex((prod)=>prod.id === p.id);
    return index;
  }

  increaseQuantity(p:IProduct):void{
      //products array: increase quan of p
      let index = this.findIndexOfProd(p);
      if(index!==-1){
          this.productsList[index].quantity +=1;
          this.emitProduct.emit(p);
      }
  }
  decreaseQuantity(p:IProduct):void{
       //products array: deccrease quan of p
       let index = this.findIndexOfProd(p);
       if(index!==-1 && this.productsList[index].quantity!==0){
          this.productsList[index].quantity -=1;
          this.emitProduct.emit(p);
       }
  }
  
}
