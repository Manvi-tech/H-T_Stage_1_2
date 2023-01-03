import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit, OnDestroy, OnChanges{

  @Input() messageText:string='Welcome to angular content projection';
  // messageText:string='Welcome to angular content projection'
  constructor() { }

  ngOnDestroy(): void {
    console.log('greeting destroyed');}

    ngOnInit(): void {
      console.log('greeting in oninit');
    }
    ngOnChanges():void{
     console.log('greeting component changes');
    }

    ngDoCheck(){
      console.log('doCheck of greeting');
    }

    ngAfterContentInit(){

      console.log('greeting content init');

    }
    ngAfterContentChecked(){
      console.log('greeting content checked');
    }
    ngAfterViewInit(){
      console.log('greeting view init');

    }

   ngAfterViewChecked(){
    console.log('greeting view checked');

   }

    displayMessage():string{
      return this.messageText;
    }


}
