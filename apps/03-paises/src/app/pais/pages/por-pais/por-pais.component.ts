import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  inputPais: string = '';
  error: boolean = false;

  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  buscar(value: string) {
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

  sugerencias(value: string){
    this.error = false;
    // TODO: Crear sugerencias
  }
}
