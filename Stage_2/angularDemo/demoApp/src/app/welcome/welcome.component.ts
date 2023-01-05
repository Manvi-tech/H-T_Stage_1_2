import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoggingService } from 'shared/logging.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{


  constructor(private logService:LoggingService, private http: HttpClient){}
  
  ngOnInit(): void {
    console.log('subscribed values :-')

    // unicast observable: different data for multiple subscribers or observer
    const obs = new Observable((data)=> data.next(Math.random()));
    obs.subscribe((d)=>console.log(d));
    obs.subscribe((d)=>console.log(d));

    // Note: behavior subject is used to emit last or imeeediate value
    // multicast observable: same data for multiple subscribers or observer
    const subject = new Subject();
    subject.subscribe(d => console.log(d));
    subject.subscribe(d => console.log(d));
    subject.next(Math.random());

    // const data = this.http.get('/api/products');
    // data.subscribe(d => console.log(d));
    // data.subscribe(d => console.log(d));
 
    const subject1 = new Subject();
    const data = this.http.get('/api/products');
    subject1.subscribe(d => console.log(d));
    subject1.subscribe(d => console.log(d));
    //data is observable so we have to subscribe to it 
    const result = data.subscribe(subject1);
    // subject1.next(data);
    
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
