
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalAddComponent } from './animals/animal-add/animal-add.component';
import { AnimalImgComponent } from './animals/animal-img.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { AppComponent } from './app.component';
import { BookComponent } from './books/book.component';
import { EventAddComponent } from './events/event-add.component';
import { EventDetailComponent } from './events/event-detail.component';
import { HomeComponentComponent } from './home/home-component.component';
import { ShellComponent } from './home/shell.component';
import { TrusteeComponent } from './trustees/trustee.component';
import { AuthGuard } from './user/auth-gaurd.service';
import { LoginComponent } from './user/login.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  
  {path:'welcome',pathMatch:'full' ,component:WelcomeComponent},

  {path:'events',component:EventDetailComponent,
    children:[
      {path:'addEvent',component:EventAddComponent}
    ]
  },

  {path:'books',component:BookComponent},

  {path:'trustees', component:TrusteeComponent},

  {path:'animals', component:AnimalListComponent,
    children:[{path:'addAnimal', component:AnimalAddComponent}]
  },

  {path:'animals/:id',component:AnimalImgComponent},

  // localhost:4200
  {path:'',pathMatch:'full', component:ShellComponent,
    children:[
      {path:'welcome',component:WelcomeComponent}
    ]
  },

  {path:'',redirectTo:'welcome',pathMatch:'full'},

  {path:'login',component:LoginComponent},

  {
    path:'products',
    loadChildren:()=>import('./product/product.module').then((m)=>m.ProductModule)
    // component:ProductComponent,
    // canActivate: [AuthGuard],
    // children:[{path:'addProduct',component:ProductAddComponent}]
  },

  {
    // lazy loading
    path:'todo',
    loadChildren:()=>import('./todo/todo.module').then((m)=>m.TodoModule)
  }
]

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
