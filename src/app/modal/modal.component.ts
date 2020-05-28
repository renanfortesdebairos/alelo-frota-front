import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalComponent>, private apiService: ApiService) { }

  ngOnInit() {
  }

  actionFunction() {
    this.apiService.deleteById(this.data.id).subscribe(() => {
      console.log("Vehicle Deleted. Id: " + this.data.id);
    });
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
