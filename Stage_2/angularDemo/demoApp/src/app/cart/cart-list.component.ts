import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Categories, IProduct } from '../products/product-list/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent implements OnChanges{
 
  title:string='';

  ngOnChanges(changes: SimpleChanges): void {
     
  }

  @Input() cartList:IProduct[]=[];

  ratingClick(msg:string):void{
    // console.log('inside product click')
    this.title = msg;
  }

  
}
