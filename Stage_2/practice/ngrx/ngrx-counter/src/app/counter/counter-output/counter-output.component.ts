import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy{

  // @Input() counter!:number;

  counter !:number;
  sub !:Subscription;
  counter$ !: Observable<{counter: number}>;

  ngOnInit(): void {    
    this.counter$ = this.store.select('counter');
    console.log(this.counter$);
    this.sub = this.counter$.subscribe(data => this.counter = data.counter);
  }

  constructor(private store:Store<{counter:CounterState}>){}
  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  
}
