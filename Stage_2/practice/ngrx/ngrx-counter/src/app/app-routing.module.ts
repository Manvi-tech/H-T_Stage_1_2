import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  {path:'counter', component:CounterComponent},
  {path:'posts', component: PostListComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
