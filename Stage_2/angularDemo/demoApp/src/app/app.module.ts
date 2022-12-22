import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent } from './pentHouse/pentHouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PentHouseComponent,
    WelcomeComponent,
    FlatListComponent,
    AnimalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
