import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    .mapa-container {
      width: 100%;
      height: 100%;
    }
    .row {
      background-color: white;
      z-index: 999;
      position: fixed;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      border-radius: 12px;

      & .form-label {
        margin: 0 !important;
        padding: 5px;
      }
    }
  `]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-57.53212015934875, -38.02606601755031],
      zoom: 17,
    });
  }

}
