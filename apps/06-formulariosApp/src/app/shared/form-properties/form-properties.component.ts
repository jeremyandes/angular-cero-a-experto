import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

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
    return {
      value: this.form.controls[key].value,
      valid: this.form.controls[key].valid,
      touched: this.form.controls[key].touched,
      pristine: this.form.controls[key].pristine
    }
  }

}
