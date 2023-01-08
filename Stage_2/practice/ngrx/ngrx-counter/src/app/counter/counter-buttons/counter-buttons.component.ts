import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit{
  
  constructor(private store:Store<{ counter: CounterState}>){}

  ngOnInit(): void {
    
  }

  //emitted to app-counter
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  onIncrement(){
    // this.increment.emit();
    this.store.dispatch(increment());
  }

  onDecrement(){
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }

  onReset(){
    // this.reset.emit();
    this.store.dispatch(reset());
  }

  value!:number;
  //custom increment
  onAdd(){
    console.log(this.value);
    this.store.dispatch(customIncrement({value:this.value}));
  }

}
