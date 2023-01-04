import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimalService } from 'shared/animalService';
import { IAnimal } from '../animal-list/animal';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit{

  pageTitle='Edit Product';
  errorMessage='';
  addAnimal!: FormGroup;
  animal!:IAnimal | null;
  sub!:Subscription;
  displayMessage: {[key:string]:string}={};

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private animalService: AnimalService
  ){
    // this.validationMessages={
    //     name:{
    //       required:'Animal name is required ',
    //       minLength:'Animal name must have 3 characters',
    //       maxLength:'Animal name must have less than  equal to 10 chars'
    //     },
    //     age:{
    //       required:'Age is required'
    //     },
    //     description:{
    //       required:'Description is required',
    //       minLength:'Animal name must have 3 characters'
    //     }
    //     image:{
    //       required:'Image is required'
    //     }
    // };
    //   this.genericValidator=new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    //intialising form values displayed
    this.addAnimal = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      age: [1, [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]],
      imageUrl: ['../../assets/images/dog3.jpg']
    });

     //when the product is selected from the product list , it should be displayed on the form
    //  when add animal is clicked , new animal object is ccreated which is selected and subscribed
     this.sub = this.animalService.selectedAnimalChanges$.subscribe(selAnimal => {
        this.displayAnimal(selAnimal)
     });

    //  this.addAnimal.valueChanges.
    //  subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addProduct))
  }

   //method which renders the selected product on the form
   displayAnimal(animalParam: IAnimal | null): void {
    this.animal = animalParam;
    if (this.animal) {
      //reset the form to its original
      this.addAnimal.reset();

      if (this.animal.id == 0) {
        this.pageTitle = 'Add Animal';
      } else {
        this.pageTitle = `Edit Animal: ${this.animal.name}`;
      }
      //update the data on the form
      this.addAnimal.patchValue({
        id: this.animal.id,
        name: this.animal.name,
        imageUrl: this.animal.imageUrl,
        age: this.animal.age,
        description: this.animal.description,
      });
    }
  }


  blur(){

  }

  // on submit of add animal form 
  saveAnimal(originalAnimal:any){
    if (this.addAnimal.valid) {
      if (this.addAnimal.dirty) {
        //copy over all of the orginal product properties
        //we arecopying data from teh addform
        //{...} it ensures that values are not lost ids are retained
        const animal = { ...originalAnimal, ...this.addAnimal.value};

        if (animal.id == 0) {
          // new animal creation
          animal.imageUrl ='../../assets/images/dog3.jpg';
          this.animalService.createAnimal(animal).subscribe(
            (resp) => {
              this.animalService.changeSelectedAnimal(resp);
              console.log(resp);
            },
            (err) => (this.errorMessage = err)
          );
        } 
        
        // else {
        //   //updating existing animal
        //   this.animalService.updateAnimal(product).subscribe(
        //     (resp) => this.animalService.changeSelectedAnimal(resp),
        //     (err) => (this.errorMessage = err)
        //   );
        // }
      }

      this.router.navigate(['animals']);
    }
  }

}
