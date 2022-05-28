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

}
