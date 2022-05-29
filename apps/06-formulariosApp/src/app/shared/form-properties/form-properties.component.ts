import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-properties',
  templateUrl: './form-properties.component.html',
  styles: [``]
})
export class FormPropertiesComponent implements OnInit {
  @Input() form!: NgForm | FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get formKeys() { return Object.keys(this.form.controls); }

  controlInfo(key: string) {
    const control: AbstractControl = this.form.controls[key];
    return {
      value: control.value,
      valid: control.valid,
      touched: control.touched,
      pristine: control.pristine,
      errors: control.errors
    }
  }

}
