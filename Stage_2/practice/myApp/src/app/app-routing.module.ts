import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RFormComponent } from './reactiveForm/r-form.component';
import { TdFormComponent } from './templateDrivenForm/td-form.component';

const routes: Routes = [
 
  {path:'',pathMatch:'full' ,component:HomeComponent,},
  {path:'tdform', component:TdFormComponent},
  {path:'rform', component:RFormComponent},
  {path:'users/:id/:name', component:HomeComponent,
    children:[
      {path:'student/:id/:name', component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
