
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ProductListComponent } from 'src/app/products/product-list/product-list.component';
import { Categories, IProduct } from 'src/app/products/product-list/product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';



// describe('getProducts() of Product Service', ()=>{
//     let products: IProduct[];
//     let mockProductService: ProductService;
//     let component: ProductListComponent;

//     beforeEach(()=>{
//         let products:IProduct[] = [
//           {
//             "id":1 ,
//             "name":"Pizza",
//             "price": 200,
//             "image": "../../assets/images/pizza.jpg",
//             "category": Categories.Food,
//             "rating": 4,
//             "quantity":0
//           },
//           {
//             "id":5,
//             "name":"Tshirt",
//             "price":1200,
//             "image": "../../assets/images/tshirt.jpg",
//             "category": Categories.Clothing,
//             "rating": 3.7,
//             "quantity":0
//           },
//           {
//             "id":10,
//             "name":"Table",
//             "price": 120000,
//             "image": "../../assets/images/table.jpg",
//             "category": Categories.Furniture,
//             "rating": 4.5,
//             "quantity":0
//           },
//           {
//             "id":16,
//             "name":"Shampoo",
//             "price":400,
//             "image": "../../assets/images/dog2.jpg",
//             "category": Categories.Cosmetics,
//             "rating": 4,
//             "quantity":0
//           }
//         ];

//         mockProductService = jasmine.createSpyObj(['getProducts']);
//         component= new ProductListComponent(mockProductService);
//     })

// })

// describe('ProductListComponent', () => {
//     let service: any;
//     let products:IProduct[] = [
//         {
//             "id":1 ,
//             "name":"zza",
//             "price": 200,
//             "image": "../../assets/images/pizza.jpg",
//             "category": Categories.Food,
//             "rating": 4,
//             "quantity":0
//           },
//           {
//             "id":5,
//             "name":"Tshirt",
//             "price":1200,
//             "image": "../../assets/images/tshirt.jpg",
//             "category": Categories.Clothing,
//             "rating": 3.7,
//             "quantity":0
//           },
//           {
//             "id":10,
//             "name":"Table",
//             "price": 120000,
//             "image": "../../assets/images/table.jpg",
//             "category": Categories.Furniture,
//             "rating": 4.5,
//             "quantity":0
//           },
//           {
//             "id":16,
//             "name":"Shampoo",
//             "price":400,
//             "image": "../../assets/images/dog2.jpg",
//             "category": Categories.Cosmetics,
//             "rating": 4,
//             "quantity":0
//           }
//     ];
  
//     beforeEach(async () => {
//       service = jasmine.createSpyObj(['getProducts']); //Creating Mock
//       service.getProducts.and.returnValue(new Observable( (obs)=>{ //creating the body of mock
//         obs.next(products);
//         obs.complete();
//       }));
  
//       await TestBed.configureTestingModule({
//         imports: [
//           HttpClientTestingModule
//         ],
//         declarations: [ProductListComponent],
//         providers: [ { provide: ProductService, useValue: service } ]
  
//       }).compileComponents();
  
//     });
  
//     it("Testing the Component Created or not",()=>{ //Product Component Created or not
//       const fixture = TestBed.createComponent(ProductListComponent);
//       fixture.detectChanges();
//       const app = fixture.componentInstance; //this is component instance
//       expect(fixture).toBeTruthy();
  
//     })
  
  
//     it("Get Products Testing",()=>{ //Testing getting products success or not
  
//       const fixture = TestBed.createComponent(ProductListComponent);
  
//       fixture.detectChanges();
  
//       let component = fixture.componentInstance;
  
//       fixture.detectChanges();
  
//       expect(component.products).toEqual(products);
  
//     })
  
  
//   });
