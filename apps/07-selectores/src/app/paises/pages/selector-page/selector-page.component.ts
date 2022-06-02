import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { Pais, PaisSmall } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [``],
})
export class SelectorPageComponent implements OnInit {
  form: FormGroup;

  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: any[] = [];

  selectedRegion: string = '';
  selectedPais: string = '';

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesService,
  ) {
    this.form = this.createForm();
    this.regiones = this.paisesService.regiones;
    console.log(this.regiones);
  }

  ngOnInit(): void {
    this.getRegiones();
    this.getPais();
  }


  createForm(): FormGroup {
    return this.fb.group({
      region: ['', Validators.required],
      pais: ['', Validators.required],
      frontera: ['', Validators.required],
    });
  }

  getRegiones(): void {
    this.form.get('region')?.valueChanges
      .pipe(
        tap(() => this.form.get('pais')?.reset('')),
        switchMap(region => this.paisesService.getPaisesPorRegion(region))
      )
      .subscribe(paises => this.paises = paises.sort((a: PaisSmall, b: PaisSmall) => a.name.common < b.name.common ? -1 : 1));
  }

  getPais(): void {
    this.form.get('pais')?.valueChanges
      .subscribe((pais) => {
        console.log(pais);
      })
  }

  guardar() {
    console.log(this.form.value);
  }

}
