
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalImgComponent } from './animals/animal-img.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { AppComponent } from './app.component';
import { BookComponent } from './books/book.component';
import { EventDetailComponent } from './events/event-detail.component';
import { HomeComponentComponent } from './home/home-component.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { TrusteeComponent } from './trustees/trustee.component';
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
  {path:'',pathMatch:'full' ,component:HomeComponentComponent}
]
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
