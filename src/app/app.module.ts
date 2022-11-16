import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { CreateParkingComponent } from './create-parking/create-parking.component';
import { FormsModule } from '@angular/forms';
import { UpdateParkComponent } from './update-park/update-park.component';
import { ParkDetailsComponent } from './park-details/park-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingListComponent,
    CreateParkingComponent,
    UpdateParkComponent,
    ParkDetailsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
