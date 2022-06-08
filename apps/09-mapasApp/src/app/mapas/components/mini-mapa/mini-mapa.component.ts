import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [`
    .mapa-container {
      width: 100%;
      height: 150px;
      margin: 0;
    }
  `]
})
export class MiniMapaComponent implements AfterViewInit {
  @Input() lngLat: [number, number] = [0, 0];
  @ViewChild('mapa') mapContainer!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const map = this.createMap();
    new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(map);
  }

  createMap(): mapboxgl.Map {
    return new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat,
      zoom: 15,
      interactive: false,
    });
  }

}
