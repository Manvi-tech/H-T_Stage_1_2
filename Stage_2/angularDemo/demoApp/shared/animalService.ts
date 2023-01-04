
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
import { BehaviorSubject, Observable, tap } from "rxjs";
import { IAnimal } from "src/app/animals/animal-list/animal";
import { IEvent } from "src/app/events/events";


@Injectable({
    providedIn:'root'
})

export class AnimalService{

    animals:IAnimal[]=[];

    constructor(private http:HttpClient){}

    private url ='api/animals';
    
    getAnimals(): Observable<any[]>{
        return this.http.get<IAnimal[]>(this.url).pipe(
            tap((data) => {
              console.log(data);
              this.animals = data;
            })
            // ,
            // catchError(this.errorHandler)
          );
    }

  //why are we using BehaviorSubject
  //BehaviorSubject is a subtype of Observable
  //BehaviorSubject --it will emit only the last value of the source observable
  //BehaviorSubject will ensure that every consumer get recent most value
  //selection --selected object from the list of values
  private selectedAnimalSource = new BehaviorSubject<IAnimal | null>(null);

  //conventionally you can put $ to the var if it is a Observable
  selectedAnimalChanges$ = this.selectedAnimalSource.asObservable();

  //called from addAnimal() 
  changeSelectedAnimal(selectedAnimal: IAnimal | null): void {
    this.selectedAnimalSource.next(selectedAnimal);
    console.log(selectedAnimal);
    console.log(this.selectedAnimalChanges$);
    console.log(this.selectedAnimalSource);
  }

   // a method newProduct which acts like a constructor of creating a new Product
  //what is name of the method -- newProduct
  //how many args --zero args
  //return type IProduct

  newAnimal(): IAnimal {
    //logic should focus on sending back a IProduct
    return {
      id: 0,
      name: '',
      age: 1,
      description:'',
      imageUrl: ''
    };
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