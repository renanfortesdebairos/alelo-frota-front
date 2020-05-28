import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { VehicleModel } from 'src/app/model/vehicle.model';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.scss']
})
export class UpdateVehicleComponent implements OnInit {

  formUpdate: FormGroup;
  plate: FormControl;
  model: FormControl;
  manufacturer: FormControl;
  color: FormControl;
  status: FormControl;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.plate = new FormControl('', Validators.required);
    this.model = new FormControl('', Validators.required);
    this.manufacturer = new FormControl('', Validators.required);
    this.color = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.formUpdate = new FormGroup({
      plate: this.plate,
      model: this.model,
      manufacturer: this.manufacturer,
      color: this.color,
      status: this.status
    });
  }

  onSubmit() {
      let vehicle: VehicleModel = new VehicleModel();
      vehicle.plate = this.plate.value;
      vehicle.model = this.model.value;
      vehicle.manufacturer = this.manufacturer.value;
      vehicle.color = this.color.value;
      vehicle.active = this.status.value === "active" ? true : false;
      this.apiService.post(vehicle).subscribe((data: any)=>{})
      this.formUpdate.reset();
  }

}
