import { Component, OnInit } from '@angular/core';
import { VehicleModel } from 'src/app/model/vehicle.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {

  vehicleList: Array<VehicleModel> = [];
  isOverlayDeleteVehicleVisible: boolean = false;

  constructor(public matDialog: MatDialog) {}

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

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "150px";
    dialogConfig.width = "250px";
    dialogConfig.data = this;
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    this.change();
    modalDialog.afterClosed().toPromise().then(() => this.change());
  }

  change() {
    if (this.isOverlayDeleteVehicleVisible) {
      this.isOverlayDeleteVehicleVisible = false;
    } else {
      this.isOverlayDeleteVehicleVisible = true;
    }
  }

}
