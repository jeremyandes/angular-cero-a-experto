import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container {
    width: 100%;
    height: 100%;
  }
  `]
})
export class MarcadoresComponent implements AfterViewInit {
  private map!: mapboxgl.Map;

  @ViewChild('mapa') mapContainer!: ElementRef;
  zoomLevel: number = 14;
  centerMap: [number, number] = [-57.53212015934875, -38.02606601755031];

  constructor() { }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centerMap,
      zoom: this.zoomLevel,
    });

    const markerHTML: HTMLElement = document.createElement('div');
    markerHTML.innerHTML = 'La costa jeje';

    const marker = new mapboxgl.Marker({
      // element: markerHTML
    })
      .setLngLat(this.centerMap)
      .addTo(this.map);
  }

}
