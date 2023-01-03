
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalImgComponent } from './animals/animal-img.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { AppComponent } from './app.component';
import { BookComponent } from './books/book.component';
import { EventDetailComponent } from './events/event-detail.component';
import { HomeComponentComponent } from './home/home-component.component';
import { ShellComponent } from './home/shell.component';
import { ProductComponent } from './products/display/product.component';
import { ProductAddComponent } from './products/product-add.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { TrusteeComponent } from './trustees/trustee.component';
import { AuthGuard } from './user/auth-gaurd.service';
import { LoginComponent } from './user/login.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  // {path:'events/:id',component:EventDetailComponent},
  // {path:'addProduct',component:ProductAddComponent},
  {path:'welcome',pathMatch:'full' ,component:WelcomeComponent},
  {path:'events',component:EventDetailComponent},
  {path:'books',component:BookComponent},
  {path:'trustees', component:TrusteeComponent},
  {path:'animals', component:AnimalListComponent},
  {path:'animals/:id',component:AnimalImgComponent},
  // {path:'' ,component:HomeComponentComponent,
  //   children:[{path:'addProduct', component:ProductAddComponent}],
  // },
  {path:'',component:ShellComponent,
    children:[{path:'welcome',component:WelcomeComponent}]
  },
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path:'products',
    component:ProductComponent,
    canActivate: [AuthGuard],
    children:[{path:'addProduct',component:ProductAddComponent}]
  },
]

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
