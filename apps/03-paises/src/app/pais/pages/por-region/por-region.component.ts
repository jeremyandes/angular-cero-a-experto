import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  getClaseCSS(region: string) {
    return this.regionActiva === region
      ? 'btn-dark'
      : 'btn-outline-dark';
  }

  activarRegion(region: string) {
    if (this.regionActiva === region) return;
    this.regionActiva = region;
    console.log(this.regionActiva);
  }
}
