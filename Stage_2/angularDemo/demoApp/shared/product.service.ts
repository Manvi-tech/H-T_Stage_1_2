import { Injectable } from "@angular/core";
import { Categories, IProduct } from "src/app/products/product-list/product";

@Injectable({
    providedIn:'root'
})

export class ProductService{

    getProducts():IProduct[]{
        return [
            {
              id:1 ,
              name:'Pizza',
              price: 200,
              image: '../../assets/images/pizza.jpg',
              category: Categories.Food,
              rating: 4,
              quantity:0
            },
            {
              id:5,
              name:'Tshirt',
              price:1200,
              image: '../../assets/images/tshirt.jpg',
              category: Categories.Clothing,
              rating: 3.7,
              quantity:0
            },
            {
              id:10,
              name:'Table',
              price: 120000,
              image: '../../assets/images/table.jpg',
              category: Categories.Furniture,
              rating: 4.5,
              quantity:0
            },
            {
              id:16,
              name:'Shampoo',
              price:400,
              image: '../../assets/images/dog2.jpg',
              category: Categories.Cosmetics,
              rating: 4,
              quantity:0
            }
          ]
    }

    
}