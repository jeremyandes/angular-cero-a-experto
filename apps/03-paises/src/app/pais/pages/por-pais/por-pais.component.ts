import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  pais: string = 'Argentina';

  constructor(private paisService: PaisService) {}

  buscar() {
    this.paisService
      .buscarPais(this.pais)
      .subscribe((resp) => console.log(resp));
  }
}
