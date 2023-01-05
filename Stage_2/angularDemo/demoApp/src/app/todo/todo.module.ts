import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import { FormsModule } from '@angular/forms';
import { TodoRoutingPageModule } from './todo-routing.module';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule, FormsModule, TodoRoutingPageModule
  ]
})
export class TodoModule { }
