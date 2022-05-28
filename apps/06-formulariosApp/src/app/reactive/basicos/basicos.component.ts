import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

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
    producto: ['RTX 3090', [Validators.required]],
    precio: [1, [Validators.required, Validators.min(1)]],
    stock: [0, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) { }



}
