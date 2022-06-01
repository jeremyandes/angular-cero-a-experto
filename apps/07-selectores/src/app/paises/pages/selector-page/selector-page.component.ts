import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [``],
})
export class SelectorPageComponent implements OnInit {
  form: FormGroup;
  regiones: string[] = [];
  paises: Pais[] = [];

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
      region: '',
      pais: '',
    })

    this.getRegiones();

  }


  createForm(): FormGroup {
    return this.fb.group({
      region: ['', Validators.required],
      pais: ['', Validators.required],
    });
  }

  getRegiones(): void {
    this.form.get('region')?.valueChanges
      .pipe(
        tap(() => this.form.get('pais')?.reset('')),
        switchMap(region => this.paisesService.getPaisesPorRegion(region))
      )
      .subscribe(paises => this.paises = paises.sort((a: Pais, b: Pais) => a.name.common < b.name.common ? -1 : 1));

  }

  guardar() {
    console.log(this.form.value);
  }

}
