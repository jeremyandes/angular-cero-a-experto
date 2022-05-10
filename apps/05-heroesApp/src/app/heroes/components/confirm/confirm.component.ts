import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class ConfirmComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmComponent>) { }

  ngOnInit(): void {
  }

  dialogDelete() {
    this.dialogRef.close(true);
  }
  dialogCancel() {
    this.dialogRef.close();
  }

}
