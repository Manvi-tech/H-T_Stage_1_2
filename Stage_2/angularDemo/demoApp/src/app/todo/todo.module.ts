import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import { FormsModule } from '@angular/forms';
import { TodoRoutingPageModule } from './todo-routing.module';
import { AppModule } from '../app.module';
import { StoreModule } from '@ngrx/store';
// import { StoreModule } from '@ngrx/store/public_api';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from '../state/todos/todo.reducer';
import { TodoEffects } from '../state/todos/todo.effects';



@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    TodoRoutingPageModule,
    StoreModule.forFeature('todo',todoReducer),
    EffectsModule.forFeature(TodoEffects)
  ]
})
export class TodoModule { }
