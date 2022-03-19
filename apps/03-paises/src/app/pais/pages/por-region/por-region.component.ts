import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];
  error: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  getClaseCSS(region: string) {
    return this.regionActiva === region ? 'btn-dark' : 'btn-outline-dark';
  }

  activarRegion(region: string) {
    if (this.regionActiva === region) return;

    this.paises = [];

    this.regionActiva = region;
    console.log(this.regionActiva);

    this.error = false;
    this.paisService.buscarPorRegion(this.regionActiva).subscribe({
      next: (resp) => {
        this.paises = resp;
        console.log(this.paises);
      },
      error: (err) => {
        console.info(err);
        this.error = true;
      },
      complete: () => console.info('paisService.buscarPorRegion => Complete'),
    });
  }
}
