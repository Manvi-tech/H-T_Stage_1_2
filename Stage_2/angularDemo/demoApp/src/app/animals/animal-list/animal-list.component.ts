import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent {

  showIamge:boolean=false;

  imgVisibility():void{
    this.showIamge = !this.showIamge;
  }

  animals:any[] = [
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
  ];
}
