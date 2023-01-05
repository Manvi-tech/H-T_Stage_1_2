import { AfterContentChecked, AfterContentInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GreetingComponent } from '../greeting/greeting.component';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent 
// implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked
{
  
  pageTitle: string = 'MenuComponentInShell';

  get isLoggedIn(): boolean {
    //service to return the loggedInstatus ofthe user
    //we will have to inject a authentication service which will checkt the loggedIn
    //still pending
    return this.authservice.isLoggedIn();
  }

  get userName(): string {
    //thru the authentication service we can the current user
    //that we will return
    if (this.authservice.currentUser)
      return this.authservice.currentUser?.userName;

    return '';
  }

  logOut(): void {
    //this should also use the authserviceto logout the current user
    //you can route to some url
    this.authservice.logOut();
    this.router.navigate(['/welcome']);
  }

  @ViewChild(GreetingComponent)greetingc!:GreetingComponent;
  //how to access ref1 template reference variable in component

  //template ref var in menu html: #ref1
  @ViewChild('ref1',{read:TemplateRef})ref1!: TemplateRef<any>;

  constructor(private router: Router, private authservice: AuthService) {}

  greet():void{
    //calling child component's grret method
    console.log(this.greetingc.displayMessage());
    this.pageTitle=this.greetingc.displayMessage();
  }

  ngOnDestroy(): void {
    console.log('greeting destroyed');
  }

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
