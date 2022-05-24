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

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.form.value);
  }

  productValid(): boolean {
    return this.form?.controls['producto']?.invalid && this.form?.controls['producto']?.touched;
  }

  precioValid(): boolean {
    return this.form?.controls['precio']?.value < 1 && this.form?.controls['precio']?.touched;
  }

}
