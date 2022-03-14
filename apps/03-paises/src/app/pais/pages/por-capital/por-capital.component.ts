import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  inputCapital: string = '';
  error: boolean = false;

  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(value: string) {
    this.error = false;
    this.inputCapital = value;
    console.log(this.inputCapital);

    this.paisService.buscarCapital(this.inputCapital).subscribe({
      next: (paises) => {
        this.paises = paises;
        console.log(this.paises);
      },
      error: (err) => {
        console.info(err);
        this.error = true;
      },
      complete: () => console.info('paisService.buscarCapital => Complete'),
    });
  }

  sugerencias(value: string) {
    this.error = false;
    // TODO: Crear sugerencias
  }
}
