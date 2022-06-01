import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [``],
})
export class SelectorPageComponent implements OnInit {
  form: FormGroup;
  regiones: string[] = [];

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesService,
  ) {
    this.form = this.createForm();
    this.regiones = this.paisesService.regiones;
    console.log(this.regiones);
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
