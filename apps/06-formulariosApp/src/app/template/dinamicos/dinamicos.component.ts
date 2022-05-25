import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardar() { }

  nombreValid() {
    return this.form?.controls['nombre']?.errors && this.form?.controls['nombre']?.touched
  }

}
