import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimalService } from 'shared/animalService';
import { IAnimal } from './animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent implements OnInit{

  animals:IAnimal[]=[];
  filteredAnimals:IAnimal[]=[]; 
  sub !: Subscription;
  errorMessage:string='';

  constructor(private animalService:AnimalService,private router: Router){}
  
  ngOnInit(): void {
    
    // this.href=this.router.url;
    // console.log(this.href);
    //sub object is initialized

      this.sub = this.animalService.getAnimals().subscribe((response)=>{
         console.log(response);
         this.animals = response;
         this.filteredAnimals = this.animals;

       },
       err=>{this.errorMessage =err;
        console.log(err);
       }
      );

      //  this.productService.selectedProductChanges$.
      //  subscribe(currentProduct=>{this.selectedProduct=currentProduct;
      //  console.log(this.selectedProduct);
      //  });

  }

  showIamge:boolean=false;

  imgVisibility():void{
    this.showIamge = !this.showIamge;
  }

  // animals:IAnimal[] = [
  //   {
  //     id: 101,
  //     name:"Snoppy",
  //     age:2,
  //     description:'white bulldog',
  //     imageUrl:'../../assets/images/dog3.jpg'
  //   },
  //   {
  //     id: 102,
  //     name:"Leo",
  //     age:6,
  //     description:'brown german shephard',
  //     imageUrl:'../../assets/images/dog2.jpg'
  //   },
  //   {
  //     id: 103,
  //     name:"Tuffy",
  //     age:4,
  //     description:'black labrador',
  //     imageUrl:'../../assets/images/dog1.jpg'
  //   }
  // ];

  addAnimal(){
      this.animalService.changeSelectedAnimal(this.animalService.newAnimal());
      this.router.navigateByUrl('animals/addAnimal');
  }
}
