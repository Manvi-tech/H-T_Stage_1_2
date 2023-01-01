import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})

export class TdFormComponent implements OnInit{

  @ViewChild('userForm') userForm !: NgForm;

  ngOnInit(): void {
    
  }

  createUser(userform: NgForm):void{
    this.userForm = userform;
    console.log(this.userForm);
  }

  resetForm(){
    this.userForm.resetForm();
  }

  setDefaultValues(){
      // this cant be dont using ngOnInit as userForm is undefined at that point
      // used to set all default values of form exactly as in value property of form
      this.userForm.form.setValue({
        confirmPassword: "abc@123",
        password: "abc@123",
        user: {email: 'abc@gmail.com', username: 'abcd'}
      })

      //used to set some properties
      this.userForm.form.patchValue({
        password: "abc@123",
        user: {email: 'abc@gmail.com', username: 'abcd'}
      })
  }

}
