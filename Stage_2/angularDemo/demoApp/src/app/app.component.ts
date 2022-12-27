import { Component } from "@angular/core";
import { IEvent } from "./event_detaiil/event-detail/events";
import { IProduct } from "./products/product-list/product";

@Component({
  selector:'app',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent{
  
  events:IEvent[]=[];

  pageTitle:string = 'my angular app';

  cartProducts:IProduct[]=[];

  receiveEmittedProduct(obj:IProduct){
      // console.log(JSON.stringify(obj));
      let index = this.cartProducts.findIndex((prod)=>prod.id === obj.id);
     
      if(index==-1){
        this.cartProducts=[...this.cartProducts,obj];
      }else{
        this.cartProducts[index].quantity = obj.quantity;
      }
      
      //products with quantity=0 are removed
      this.cartProducts = this.cartProducts.filter((prod)=>prod.quantity !==0)

  }
  
}

