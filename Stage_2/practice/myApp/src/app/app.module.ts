import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { TdFormComponent } from './templateDrivenForm/td-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartListComponent,
    TdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
