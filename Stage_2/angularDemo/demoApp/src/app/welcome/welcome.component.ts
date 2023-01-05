import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoggingService } from 'shared/logging.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{


  constructor(private logService:LoggingService){}
  
  ngOnInit(): void {
    console.log('subscribed values :-')
    // const obs = new Observable((data)=> data.next(Math.random()));
    // obs.subscribe((d)=>console.log(d));
    // obs.subscribe((d)=>console.log(d));

    const subject = new Subject();

    subject.subscribe(d => console.log(d));
    subject.subscribe(d => console.log(d));

    subject.next(Math.random());
  }

  pageTitle:string="title";
  data:number=3;
  msg:string='manvi';
  nums:number=0;
  logMsg:string='';
  
  callLog():void{
    this.logMsg = this.logService.log();
  }
  
  
}
