import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  pais: string = '';
  error: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar() {
    this.error = false;
    this.paisService.buscarPais(this.pais).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.info(err);
        this.error = true;
      },
      complete: () => console.info('paisService.buscarPais => Complete'),
    });
  }
}
