import { AfterContentChecked, AfterContentInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent 
// implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked
{
  
  msg:string='hello there'
  
  constructor() { console.log('shell constructor');}
  
  // ngOnDestroy(): void {
  //   console.log('greeting destroyed');}

  //   ngOnInit(): void {
  //     console.log('greeting in oninit');
  //   }
  //   ngOnChanges():void{
  //    console.log('greeting component changes');
  //   }

  //   ngDoCheck(){
  //     console.log('doCheck of greeting');
  //   }

  //   ngAfterContentInit(){

  //     console.log('greeting content init');

  //   }
  //   ngAfterContentChecked(){
  //     console.log('greeting content checked');
  //   }
  //   ngAfterViewInit(){
  //     console.log('greeting view init');

  //   }

  //  ngAfterViewChecked(){
  //   console.log('greeting view checked');

  //  }
}
