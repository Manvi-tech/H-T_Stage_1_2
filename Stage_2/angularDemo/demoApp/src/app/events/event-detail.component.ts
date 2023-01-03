import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'shared/event.service';
import { IEvent } from './events';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {

  message:string='';
  
  constructor(private eventService:EventService){}

  eventDetailMsg:string = 'eventDetailMsg';

  sub!:Subscription;

  ngOnInit(): void {
     this.sub = this.eventService.getEvents()
              .subscribe(
                (response)=>{
                  console.log(response);
                  this.eventsList = response;
                },
                (err)=>{
                    console.log(err);
                },
                ()=>{
                  console.log('completed');
                }
              );
  }

  ngOnDestroy(): void {
     this.sub.unsubscribe();
  }


  eventsList:IEvent[]=[];

}
