import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  form: FormGroup = new FormGroup({
    'producto': new FormControl(
      'RTX 3090', [Validators.required]
    ),
    'precio': new FormControl(
      1, [Validators.required, Validators.min(1)]
    ),
    'stock': new FormControl(
      0, [Validators.required, Validators.min(0)]
    ),
  })

  constructor() { }

}
