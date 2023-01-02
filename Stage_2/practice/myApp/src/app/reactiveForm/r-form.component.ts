import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit{

  genders = ['Male', 'Female', 'Other'];

  userForm!: FormGroup;

  onSubmit():void{
    console.log(this.userForm);
  }

  get username(){
    return this.userForm.get('username');
  }

  get email(){
    return this.userForm.get('email');
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('Male')
    })
  }

}
