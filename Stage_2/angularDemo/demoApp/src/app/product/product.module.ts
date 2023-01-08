import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './cart/cart-list.component';
import { StarComponent } from '../star/star.component';
import { ProductRoutingPageModule } from './product.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    CartListComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingPageModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule
    // StoreModule.forFeature('products',productReducer),
    // EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }
