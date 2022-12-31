
// animals:any[] = [
//     {
//       id: 101,
//       name:"Snoppy",
//       age:2,
//       description:'white bulldog',
//       imageUrl:'../../assets/images/dog3.jpg'
//     },
//     {
//       id: 102,
//       name:"Leo",
//       age:6,
//       description:'brown german shephard',
//       imageUrl:'../../assets/images/dog2.jpg'
//     },
//     {
//       id: 103,
//       name:"Tuffy",
//       age:4,
//       description:'black labrador',
//       imageUrl:'../../assets/images/dog1.jpg'
//     }

//   ];

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAnimal } from "src/app/animals/animal-list/animal";
import { IEvent } from "src/app/events/events";


@Injectable({
    providedIn:'root'
})

export class AnimalService{


    constructor(private http:HttpClient){}

    private url ='api/animals';
    
    getAnimals(): Observable<any[]>{
        return this.http.get<IAnimal[]>(this.url);
    }

    // getAnimalById(id:number): any{
    //     animal:IAnimal[] = this.getAnimals();
    // }
    // getProductById(id:number):Observable<IProduct>{
    //     return this.getProducts().pipe(
    //       tap(()=>{console.log('fetch product'+id);
    //        this.foundIndex =this.products.findIndex(item=>item.id ==id);
    //       if(this.foundIndex > -1){
    //         this.products[this.foundIndex];
    //           }
    //       }),
    //       map(()=>this.products[this.foundIndex]),
    //       catchError(this.errorHandler)
    //       );
    
    
    
    
    //    }
    
}