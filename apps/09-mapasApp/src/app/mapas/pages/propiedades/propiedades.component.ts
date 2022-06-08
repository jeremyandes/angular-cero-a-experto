import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [`
  
  `]
})
export class PropiedadesComponent implements AfterViewInit {

  propiedades: Propiedad[] = [
    {
      titulo: 'Casa residencial, Canadá',
      descripcion: 'Bella propiedad en Katana, Canadá',
      lngLat: [-75.92722289474008, 45.280015511264466]
    },
    {
      titulo: 'Casa de playa, México',
      descripcion: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [-99.91287720907991, 16.828940930185748]
    },
    {
      titulo: 'Apartamento, Argentina',
      descripcion: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [-58.430166677283445, -34.57150108832866]
    },
    {
      titulo: 'Local comercial, España',
      descripcion: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [-3.7112735618380177, 40.42567285425766]
    },
  ]

  constructor() { }

  ngAfterViewInit(): void { }

  // private initMap() {
  //   return new mapboxgl.Map({
  //     container: this.mapContainer.nativeElement,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: this.centerMap,
  //     zoom: this.zoomLevel,
  //   });
  // }

}
