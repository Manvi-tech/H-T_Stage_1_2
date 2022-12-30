import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimalService } from 'shared/animalService';
import { IAnimal } from './animal-list/animal';

@Component({
  selector: 'app-animal-img',
  templateUrl: './animal-img.component.html',
  styleUrls: ['./animal-img.component.css']
})
export class AnimalImgComponent {
  imgUrl:string='';
  animal !:IAnimal;
  // sub!:Subscription;
  sub2 !:Subscription;
  animals:IAnimal[]=[
    {
      id: 101,
      name:"Snoppy",
      age:2,
      description:'white bulldog',
      imageUrl:'../../assets/images/dog3.jpg'
    },
    {
      id: 102,
      name:"Leo",
      age:6,
      description:'brown german shephard',
      imageUrl:'../../assets/images/dog2.jpg'
    },
    {
      id: 103,
      name:"Tuffy",
      age:4,
      description:'black labrador',
      imageUrl:'../../assets/images/dog1.jpg'
    }
  ];;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private service:AnimalService) { }
  
  ngOnDestroy(): void {
    this.sub2.unsubscribe();
  }

  ngOnInit(): void {
  // we have to get the selected emp object here on this page at the time of its initialialsation

    // this.sub = this.service.getAnimals()
    // .subscribe(
    //   (response)=>{
    //     console.log(response);
    //     this.animals = response;
    //   },
    //   (err)=>{
    //       console.log(err);
    //   },
    //   ()=>{
    //     console.log('completed');
    //   }
    // );

     this.sub2 = this.activatedRoute.paramMap.subscribe((params)=>{
       console.log(params);
       let id=params.get('id');
        if(id){
          let idd = +id;
          console.log(this.animals);
          let index = this.animals.findIndex((a)=> a.id === idd);
          if(index !== -1){
            this.imgUrl = this.animals[index].imageUrl;
          }
          // if(this.animals.find((a)=>a.id == idd))
          //   this.imgUrl = this.animal.imageUrl;
          console.log(this.imgUrl);
        }
     })

  }

  back():void{
    this.router.navigate(['animals']);
  }
}
