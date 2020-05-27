import { Component, OnInit } from '@angular/core';
import { VehicleModel } from 'src/app/model/vehicle.model';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {

  vehicleList: Array<VehicleModel> = [];

  constructor() { }

  ngOnInit(): void {

    for (let i = 0; i < 10; i++) {
      
      let vehicle = new VehicleModel();
      vehicle.plate = "ABC-1234";
      vehicle.model = "Class C 1.6 Avantgarde Turbo Flex";
      vehicle.manufacture = "Mercedez-Benz";

      if(i % 2 == 0) {
        vehicle.isAtivo = true;
      } else {
        vehicle.isAtivo = false;
      }

      this.vehicleList.push(vehicle);

    }
  }

}
