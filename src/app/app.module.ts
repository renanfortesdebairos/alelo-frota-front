import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';

@NgModule({
  declarations: [
    ListVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ListVehicleComponent]
})
export class AppModule { }
