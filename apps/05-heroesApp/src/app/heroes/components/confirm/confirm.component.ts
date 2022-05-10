import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [`
    img {
      width: 100%;
    }
  `]
})
export class ConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public heroe: Heroe,
    private dialogRef: MatDialogRef<ConfirmComponent>
  ) {
  }

  ngOnInit(): void {
    console.log(this.heroe);
  }

  dialogDelete() {
    this.dialogRef.close(true);
  }
  dialogCancel() {
    this.dialogRef.close();
  }

}
