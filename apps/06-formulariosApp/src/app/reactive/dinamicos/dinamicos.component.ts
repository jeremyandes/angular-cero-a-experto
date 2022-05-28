import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  form: FormGroup;
  newFavorito: FormControl;

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
    this.newFavorito = this.createFavorito();
  }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.fb.group({
      nombre: [null, [Validators.required, Validators.minLength(2)]],
      favoritos: this.fb.array(
        [
          ['CSGO', Validators.required],
          ['Valorant', Validators.required],
          ['Battlefield 4', Validators.required],
        ]
      )
    })
  }
  createFavorito(): FormControl {
    return this.fb.control('', [Validators.required, Validators.minLength(2)]);
  }

  get favoritos(): FormArray {
    return this.form.get('favoritos') as FormArray;
  }

  addFavorito() {
    if (this.newFavorito.invalid || this.form.invalid) {
      this.newFavorito.markAllAsTouched();
    } else {
      // this.favoritos.push(new FormControl(this.newFavorito.value, [Validators.required]));
      this.favoritos.push(this.fb.control(this.newFavorito.value, [Validators.required]));
      this.newFavorito.reset();
    }
  }

  fieldValidator(field: string): boolean | null {
    return this.form.controls[field]?.invalid && this.form.controls[field]?.touched;
  }

  controlValidator(control: FormControl) {
    return control.invalid && control.touched;
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.newFavorito.markAllAsTouched();
    } else {
      console.log(this.form.value);
    }
  }

  delete(i: number) {
    this.favoritos.removeAt(i);
  }

}
