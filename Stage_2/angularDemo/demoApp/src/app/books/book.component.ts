
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  bookForm!:FormGroup;

  constructor(formBuilder:FormBuilder){

    this.bookForm=formBuilder.group({
        id:['1',[Validators.required,Validators.max(100)]],
        title:['Elements',[Validators.required,Validators.minLength(5)]],
        author:formBuilder.group({
          name:['R.S. Agarwal',[Validators.required,Validators.minLength(5)]],
          email:['rsagarwal@gmail.com',[Validators.required]]
        }),
        dateOf:["2022-02-02",[Validators.required]]
    })

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
  }

  onSubmit(){
    console.log(this.bookForm.value);
  }

}