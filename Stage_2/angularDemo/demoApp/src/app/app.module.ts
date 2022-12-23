import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent } from './pentHouse/pentHouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    AppComponent,
    PentHouseComponent,
    WelcomeComponent,
    FlatListComponent,
    AnimalListComponent,
    ProductListComponent,
    StarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
