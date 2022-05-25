import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  initForm = {
    producto: 'RTX 3090',
    precio: 2500,
    stock: 10,
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.form.value);

    this.form.resetForm({
      producto: 'Asdsad',
      precio: 0,
      stock: 0,
    })
  }

  productValid(): boolean {
    return this.form?.controls['producto']?.invalid && this.form?.controls['producto']?.touched;
  }

  precioValid(): boolean {
    return this.form?.controls['precio']?.value < 1 && this.form?.controls['precio']?.touched;
  }

}
