import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-properties',
  templateUrl: './form-properties.component.html',
  styles: [``]
})
export class FormPropertiesComponent implements OnInit {
  @Input() form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

}
