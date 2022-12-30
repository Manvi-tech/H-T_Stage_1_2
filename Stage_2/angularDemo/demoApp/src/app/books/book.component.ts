
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  bookForm!:FormGroup;

  constructor(private formBuilder: FormBuilder){
  }

  get id(){
    return this.bookForm.get('id');
  }

  get name(){
    return this.bookForm.get('title');
  }

  get dateOf(){
    return this.bookForm.get('dateOf');
  }

  get city(){
    return this.bookForm.get('author')?.get('name');
  }

  get state(){
    return this.bookForm.get('author')?.get('email');
  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      id:['1',[Validators.required,Validators.max(100)]],
      title:['Elements',[Validators.required,Validators.minLength(5)]],
      author:this.formBuilder.group({
        name:['R.S. Agarwal',[Validators.required,Validators.minLength(5)]],
        email:['rsagarwal@gmail.com',[Validators.required]]
      }),
      dateOf:["2022-02-02",[Validators.required]],
      publishers:this.formBuilder.array([])
    });
  }

  newPublisher():FormGroup{
    return this.formBuilder.group({
      name:'',
      phn:''
    });
  }

  addPublisher(){
    console.log('hello');
    this.publishers().push(this.newPublisher())
  }

  removePublisher(pubIndex:number){
    let arr=this.bookForm.get('publishers') as FormArray;
   arr.removeAt(pubIndex);
  }

  publishers():FormArray{
    return this.bookForm.get('publishers') as FormArray;
  }

  onSubmit(){
    console.log(this.bookForm.value);
  }

}