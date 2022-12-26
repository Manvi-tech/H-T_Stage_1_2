import { Component } from '@angular/core';
import { IProduct } from './products/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'myApp';
    name = 'Manvi';

    cartProducts:IProduct[]=[];

    receiveEmittedProduct(p:IProduct):void{

      let index = this.cartProducts.findIndex((prod)=>prod.id === p.id);
        if(index===-1){
            this.cartProducts.push(p);
        }
        else{
          //if quantity is 0: then pop
          if(p.quantity === 0)
            this.cartProducts.splice(index,1);
          else
            this.cartProducts[index].quantity = p.quantity;
        }
    }

}
