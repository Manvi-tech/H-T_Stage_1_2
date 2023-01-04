
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";
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
            }),
            catchError(this.errorHandler)
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

 
  //what ever is in the request body, that is the object of IProduct
  //http post request  with the request body and request headers -content type application/json
  //url is the collection of events ==  /api/events

  //what is the method name --createProduct
  //args -- product of type IProduct
  //return Observable<IProduct>

  createAnimal(animal: IAnimal): Observable<IAnimal> {
    //headers variable to set request headers
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //newProduct spread across product
    const newAnimal = { ...animal, id: null };

    //return logic starts here
    //http .post method
    //generics method -- IProduct
    //args --3 url , newProduct ,headers
    //this.url -- declared in the class outside the functions
    return this.http.post<IAnimal>(this.url, newAnimal, { headers }).pipe(
      tap((data) => {
        console.log('in create new product' + JSON.stringify(data));
        //pushing the new data new Product to the products array
        this.animals.push(data);
      }, catchError(this.errorHandler))
    );
  }

  updateAnimal(animal: IAnimal): Observable<IAnimal> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //put http method
    const url = `${this.url}/${animal.id}`;

    //logic to call http put method to update the product on the given url
    return this.http.put<IAnimal>(url, animal, { headers }).pipe(
      tap(() => {
        console.log('update product' + animal.id);
        const foundIndex = this.animals.findIndex(
          (item) => item.id === animal.id
        );
        if (foundIndex > -1) {
          this.animals[foundIndex] = animal;
        }
      }),
      map(() => animal),
      catchError(this.errorHandler)
    );
  }

  deleteAnimal(animalId:number): Observable<{}>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //@DeleteMapping deleteAll delete url/id  /api/products/111
    const url = `${this.url}/${animalId}`;

    return this.http.delete<IAnimal>(url, { headers }).pipe(
      tap((data) => {
        console.log('deleted prd' + animalId);
        const foundIndex = this.animals.findIndex((item) => item.id === animalId);
        //if product id is not found means index returned will be -1
        if (foundIndex > -1) this.animals.splice(foundIndex, 1);
      }, catchError(this.errorHandler))
    );
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

      //errorhandler which returns the Observable with errorMessage
  
  errorHandler = (err: any) => {
    let errorMessage: string;
    //a client side error or network error then ErrorEvent object will be thrown

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error has occured ${err.error.message}`;
    } else {
      errorMessage = `Backend error code ${err.status} ${err.body.error}`;
    }
    console.log(err);
    return throwError(errorMessage);

  };


    
}