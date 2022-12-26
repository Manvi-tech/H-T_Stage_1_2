import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'shared/event.service';
import { IEvent } from './events';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy{
  
  constructor(private eventService:EventService){}

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
