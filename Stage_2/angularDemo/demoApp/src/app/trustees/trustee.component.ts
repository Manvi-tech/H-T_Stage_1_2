import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Trustee{
  trusteeId!: number;
  name!:string;
  gender!: string; 
  passport!: string;  
  issuanceDate!: string;
  noOfDependents!: number;
}

@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.css']
})

export class TrusteeComponent implements OnInit{

  trustee!: Trustee;
  @ViewChild('trusteeForm',{}) trusteeForm !: NgForm;

  ngOnInit(): void {
     this.trustee={
      trusteeId:0,
      name:'Manvi',
      passport:'1234567890',
      issuanceDate:'2022-12-29',
      noOfDependents:2,
      gender:'female'
     }

     setTimeout(()=>{
      this.trusteeForm.setValue(this.trustee);
     }, 1000);
  }
    
  onSubmit(trusteeForm:any){
    console.log(trusteeForm.value);
  }

  resetForm(trusteeForm:any){
    trusteeForm.resetForm();
  }

}
