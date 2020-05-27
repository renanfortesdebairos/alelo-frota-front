import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';

const routes: Routes = [{ path: 'list-vehicle', component: ListVehicleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }