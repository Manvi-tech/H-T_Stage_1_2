import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})

export class TdFormComponent {

  @ViewChild('userForm') userForm !: NgForm;

  createUser(userform: NgForm):void{
    this.userForm = userform;
    console.log(this.userForm);
  }

  resetForm(){
    this.userForm.resetForm();
  }

}
