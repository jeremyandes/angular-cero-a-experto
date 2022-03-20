import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  inputPais: string = '';
  error: boolean = false;

  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(value: string) {
    this.mostrarSugerencias = false;
    this.error = false;
    this.inputPais = value;
    console.log(this.inputPais);

    this.paisService.buscarPais(this.inputPais).subscribe({
      next: (paises) => {
        this.paises = paises;
        console.log(this.paises);
      },
      error: (err) => {
        console.info(err);
        this.error = true;
      },
      complete: () => console.info('paisService.buscarPais => Complete'),
    });
  }

  sugerencias(value: string) {
    if (value === '') return;

    this.inputPais = value;

    this.mostrarSugerencias = true;

    this.error = false;
    this.paisService.buscarPais(value).subscribe({
      next: (paises) => {
        this.paisesSugeridos = paises.splice(0, 3);
        console.log(this.paisesSugeridos);
      },
      error: (err) => {
        this.error = true;
        console.info(err);
      },
      complete: () =>
        console.log('por-pais.component > sugerencias() complete'),
    });
  }

  buscarSugerido(value: string) {
    this.buscar(value);
  }
}
