import { Component } from '@angular/core';

@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.css']
})

export class TrusteeComponent {
    
  id!: number;
  name!:string;
  gender!: string;
  countryOfResidence!: string;  
  passport!: string;  
  issuanceDate!: string;
  noOfDependents!: number;

  onSubmit(trusteeForm:any){
    console.log(trusteeForm.value);
  }

}
