
import { Injectable } from "@angular/core";

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { Category, IProduct } from "src/app/products/product";


@Injectable({
    providedIn:'root'
})

export class InMemoryDbEventService implements InMemoryDbService {
    
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> { 
        
        let products: IProduct[]= 
        [
            {
                "id":111,
                "name":"apples",
                "category":Category.fruits,
        
                "price":180,
                "image":"../../assets/images/dog1.jpg",
                "rating":3.5,
                "qty":2
               },
              {
        
                "id":112,
                "name":"tomato",
                "category":Category.vegetables,
                "price":340,
                "image":"../../assets/images/dog1.jpg",
                "rating":2,
                "qty":1
            }
        ]
        
        return {products};
                
    }

}