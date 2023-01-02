import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductAddComponent } from './products/product-add.component';
import { HomeComponent } from './Home/home.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbEventService } from 'shared/inMemDbEventService';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDbEventService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
