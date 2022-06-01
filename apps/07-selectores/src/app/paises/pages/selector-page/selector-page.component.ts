import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [``],
})
export class SelectorPageComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.form.reset({
      continente: '',
    })
  }

  createForm(): FormGroup {
    return this.fb.group({
      continente: ['', Validators.required],
    });
  }

  guardar() {
    console.log(this.form.value);
  }

}
