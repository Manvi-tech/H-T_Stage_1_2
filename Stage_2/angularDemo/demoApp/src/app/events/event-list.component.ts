import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvent } from './events';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy{
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  eventsList:IEvent[]=[];

}
