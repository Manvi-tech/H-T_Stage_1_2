import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/products/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  @Input() cartList:IProduct[]=[];



}
