import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface CustomMarker {
  color: string;
  marker: mapboxgl.Marker;
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container {
      width: 100%;
      height: 100%;
    }

    .list-group{
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
    }

    li {
      cursor: pointer;
    }
  `]
})
export class MarcadoresComponent implements AfterViewInit {
  private map!: mapboxgl.Map;

  @ViewChild('mapa') mapContainer!: ElementRef;
  zoomLevel: number = 14;
  centerMap: [number, number] = [-57.53212015934875, -38.02606601755031];

  markers: CustomMarker[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centerMap,
      zoom: this.zoomLevel,
    });

    // const markerHTML: HTMLElement = document.createElement('div');
    // markerHTML.innerHTML = 'La costa jeje';

    // const marker = new mapboxgl.Marker({
    //   // element: markerHTML
    // })
    //   .setLngLat(this.centerMap)
    //   .addTo(this.map);
  }

  agregarMarcador() {
    const color = this.randomColor;
    const nuevoMarker = new mapboxgl.Marker({
      draggable: true,
      color: this.randomColor
    })
      .setLngLat(this.centerMap)
      .addTo(this.map);

    this.markers.push({ color, marker: nuevoMarker });
  }

  flyTo() {

  }

  get randomColor(): string { return "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16)); }

}
