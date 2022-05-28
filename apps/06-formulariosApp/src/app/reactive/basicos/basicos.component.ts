import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // form: FormGroup = new FormGroup({
  //   'producto': new FormControl(
  //     'RTX 3090', [Validators.required]
  //   ),
  //   'precio': new FormControl(
  //     1, [Validators.required, Validators.min(1)]
  //   ),
  //   'stock': new FormControl(
  //     0, [Validators.required, Validators.min(0)]
  //   ),
  // })

  form: FormGroup = this.fb.group({
    producto: [null, [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.required, Validators.min(1)]],
    stock: [null, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // this.form.setValue({
    //   producto: 'RTX 3090',
    //   precio: 2500,
    //   stock: 10,
    // })

    this.form.reset({
      producto: 'RTX 3090',
      precio: 2500,
    })
  }

  fieldValidation(field: string): boolean | null {
    return this.form.controls[field]?.errors && this.form.controls[field]?.touched;
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
