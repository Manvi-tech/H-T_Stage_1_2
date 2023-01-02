import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { IProduct } from "src/app/products/product";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class ProductService{

    private url="api/products";
    products !: IProduct[];

    //why are we passing http in the constructor as an argument
    //what will angular do here
    //angular will inject the httpclient dependency in productservice
    //productservice needs to send http requests -- get post put delete
    constructor(private http:HttpClient){}

    //retrieving all the products from api
    //method name is getProducts( ) --no args
    //what it is returning  ,what is the return type
    //return type is mentioned after the method name and a colon
    //return type  is Observable<IProduct[]>
    getProducts():Observable<IProduct[]>{
    //what is the logic
    //to get array of IProduct from db
    //get method is a generic method IProduct[]
    //arguments u are passing this.url api/products --- api
    //pipe -- operator in rxjs  where you ca
    return this.http.get<IProduct[]>(this.url).pipe(

        tap(data=>{console.log(data);
          //we are assigning data to this.products
          this.products = data;
    })
        // catchError(this.errorHandler)
    );

  }
}