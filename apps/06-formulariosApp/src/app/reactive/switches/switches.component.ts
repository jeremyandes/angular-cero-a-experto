import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Person {
  radioGenero: string;
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
    radioGenero: 'F',
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.form.reset({
      ...this.persona,
      tyc: false,
    })

    this.form.valueChanges.subscribe({
      next: ({ tyc, ...args }) => {
        console.log(tyc, args);
      },
      error: (err) => { console.error(err) }
    })
  }

  createForm(): FormGroup {
    return this.fb.group({
      radioGenero: ['F', Validators.required],
      notificaciones: [true, Validators.required],
      tyc: [false, Validators.required],
    })
  }

  save() {
    const formValue = { ...this.form.value };
    delete formValue.tyc;

    console.log(formValue);
  }

}
