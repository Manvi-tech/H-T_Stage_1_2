import { Component , OnInit} from '@angular/core';
import { Categories, IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  ngOnInit(): void {
    this.filteredProducts=this.products;
  }

  category:Categories = Categories.All;
 
  filteredProducts:IProduct[]=[];

  products:IProduct[]=[
    {
      id:1 ,
      name:'Pizza',
      price: 200,
      image: '../../assets/images/pizza.jpg',
      category: Categories.Food,
      rating: 3
    },
    {
      id:5,
      name:'Tshirt',
      price:1200,
      image: '../../assets/images/tshirt.jpg',
      category: Categories.Clothing,
      rating: 3.7
    },
    {
      id:10,
      name:'Table',
      price: 120000,
      image: '../../assets/images/table.jpg',
      category: Categories.Furniture,
      rating: 4.5
    },
    {
      id:16,
      name:'Shampoo',
      price:400,
      image: '../../assets/images/dog2.jpg',
      category: Categories.Cosmetics,
      rating: 4
    }
  ]

  filterProd():void{
     this.filteredProducts = this.products.filter((p:IProduct)=>p.category === (this.category));
  }

}
