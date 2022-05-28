import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.fb.group({
      nombre: [null, [Validators.required, Validators.minLength(2)]],
      nuevoJuego: [null, [Validators.required, Validators.minLength(2)]]
    })
  }

  fieldValidator(field: string): boolean | null {
    return this.form.controls[field]?.invalid && this.form.controls[field]?.touched;
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      console.log(this.form.value);
      this.form.reset();
    }
  }

}
