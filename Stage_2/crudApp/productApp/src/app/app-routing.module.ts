import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './products/product-add.component';
import { ProductListComponent } from './products/product-list.component';

const routes: Routes = [
  {path:'products',component:ProductListComponent,
  children:[{path:'addProduct',component:ProductAddComponent},]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
