import { Component, OnInit } from '@angular/core';
import { VehicleModel } from 'src/app/model/vehicle.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {

  paginas: Array<number> = [];
  paginasNecessarias: number;
  paginaAtiva: number = 1;
  vehicleList: Array<VehicleModel> = [];
  isOverlayDeleteVehicleVisible: boolean = false;
  formSearch: FormGroup;
  plate: FormControl;

  constructor(private apiService: ApiService, public matDialog: MatDialog) {}

  ngOnInit(): void {
    this.recuperarDadosParaPaginacao();
    this.changePage(1);
    
    this.plate = new FormControl('', Validators.required);
    this.formSearch = new FormGroup({
      plate: this.plate
    });
  }

  recuperarDadosParaPaginacao() {
    this.apiService.getCountVehicles().subscribe((data: number) => {
      this.paginasNecessarias = (data % 10 == 0) ? data / 10 : Math.trunc(data / 10) + 1;
      this.paginas = [];
      this.atualizarNumerosPaginacao(null);
      console.log(data % 10);
    })
  }

  atualizarNumerosPaginacao(sentido) {

    if (sentido == null) {
      if (this.paginasNecessarias >= 5) {
        for (let i = 1; i <= 5; i++) {
          this.paginas.push(i);
        }
      } else {
        for (let i = 1; i <= this.paginasNecessarias; i++) {
          this.paginas.push(i);
        }
      }
    } else {

      if (sentido === "next") {
        if (this.paginasNecessarias >= 5) {
          if ((this.paginaAtiva - 5) < 1) {
            for (let i = 1; i <= 5; i++) {
              this.paginas.push(i);
            }
          } else {
            for (let i = (this.paginaAtiva - 4); i <= this.paginaAtiva; i++) {
              this.paginas.push(i);
            }
          }
        }
      } else if (sentido === "previous") {
        if (this.paginasNecessarias >= 5) {
          if ((this.paginaAtiva - 5) < 1) {
            for (let i = 1; i <= 5; i++) {
              this.paginas.push(i);
            }
          } else {
            for (let i = this.paginaAtiva; i <= (this.paginaAtiva + 4); i--) {
              this.paginas.push(i);
            }
          }
        }
      }
    }
  }

  openModal(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "150px";
    dialogConfig.width = "250px";
    dialogConfig.data = { id: id };
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    this.change();
    modalDialog.afterClosed().toPromise().then(() => {
      this.change();
      this.changePage(this.paginaAtiva)
    });
  }

  change() {
    if (this.isOverlayDeleteVehicleVisible) {
      this.isOverlayDeleteVehicleVisible = false;
    } else {
      this.isOverlayDeleteVehicleVisible = true;
    }
  }

  onSubmit() {
    if (this.formSearch.valid) {
      this.vehicleList = [];
      this.apiService.getByPlate(this.plate.value).subscribe((data: VehicleModel[])=>{  
        console.log(data);  
        this.vehicleList = data;
      })
      this.formSearch.reset();
    }
  }

  changePage(pagina) {
    if (pagina < 1 || pagina > this.paginasNecessarias) {
      //Nada a fazer
    } else {
      this.recuperarDadosParaPaginacao();
      this.apiService.getVehiclesByPage(pagina-1).subscribe((data: VehicleModel[])=>{
        this.vehicleList = data;
        this.paginaAtiva = pagina;

        if (this.vehicleList.length === 0) {
          this.previousPage();
        }
      })
    }
  }

  previousPage() {
    this.changePage(this.paginaAtiva-1);
    this.atualizarNumerosPaginacao("previous");
  }

  nextPage() {
    this.changePage(this.paginaAtiva+1);
    this.atualizarNumerosPaginacao("next");
  }
}
