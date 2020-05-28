import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';
import { UpdateVehicleComponent } from './vehicle/update-vehicle/update-vehicle.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-vehicle', pathMatch: 'full'},
  { path: 'list-vehicle', component: ListVehicleComponent },
  { path: 'update-vehicle', component: UpdateVehicleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }