import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Person {
  genero: string;
  notificaciones: boolean;
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  form: FormGroup;
  persona: Person = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.fb.group({
      radioGenero: ['F', Validators.required],
      notificaciones: [true, Validators.required],
      tyc: [false, Validators.required],
    })
  }

}
