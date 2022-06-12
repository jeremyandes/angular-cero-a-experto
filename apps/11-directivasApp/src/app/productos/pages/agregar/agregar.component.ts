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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
    })
  }

  controlHasErrors(control: string): boolean | undefined {
    return this.form.get(control)?.invalid;
  }

  cambiarError() { this.errorString = 'Error cambiado'; }
}
