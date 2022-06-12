import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  form!: FormGroup;
  errorString: string = 'Campo requerido';
  color: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cambiarColor();

    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
    })
  }

  controlHasErrors(control: string): boolean | undefined {
    return this.form.get(control)?.invalid;
  }

  cambiarError() { this.errorString = Number(Math.random()).toString(); }
  cambiarColor() { this.color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16)); }
}
