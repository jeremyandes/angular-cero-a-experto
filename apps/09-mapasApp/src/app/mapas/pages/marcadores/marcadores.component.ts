import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface CustomMarker {
  color?: string;
  marker?: mapboxgl.Marker;
  center?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container {
      width: 100%;
      height: 100%;
    }

    .list-group, .btn-group{
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
export class MarcadoresComponent implements AfterViewInit, OnDestroy {
  private map!: mapboxgl.Map;

  @ViewChild('mapa') mapContainer!: ElementRef;
  zoomLevel: number = 14;
  centerMap: [number, number] = [-57.53212015934875, -38.02606601755031];

  markers: CustomMarker[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.loadMarkers();
    this.onDragEndMarker();
  }

  ngOnDestroy(): void {
    this.map.off('dragend', () => { });
  }

  private initMap() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centerMap,
      zoom: this.zoomLevel,
    });
  }

  private loadMarkers() {
    this.getMarkersLocalStorage().forEach(marker => {
      const nuevoMarker = new mapboxgl.Marker({
        draggable: true,
        color: marker.color,
      })
        .setLngLat(marker.center!)
        .addTo(this.map);

      this.markers.push({ color: marker.color, marker: nuevoMarker });
    });
  }

  private onDragEndMarker() {
    this.markers.forEach(({ marker }) => marker!.on('dragend', () => this.saveMarkersLocalStorage()));
  }

  private get randomColor(): string { return "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16)); }

  private saveMarkersLocalStorage() {
    const lngLat: CustomMarker[] = [];
    this.markers.forEach(item => {
      const color = item.color;
      const { lng, lat } = item.marker!.getLngLat();
      lngLat.push({ color, center: [lng, lat] });
    });
    localStorage.setItem('markers', JSON.stringify(lngLat));
    console.log(localStorage.getItem('markers'));
  }

  private getMarkersLocalStorage(): CustomMarker[] {
    if (!localStorage.getItem('markers')) { return []; }

    const lngLat: CustomMarker[] = JSON.parse(localStorage.getItem('markers')!);
    return lngLat;
  }

  agregarMarcador() {
    const color = this.randomColor;
    const nuevoMarker = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.centerMap)
      .addTo(this.map);

    this.markers.push({ color, marker: nuevoMarker });
    this.saveMarkersLocalStorage();
  }

  borrarMarker(index: number) {
    this.markers[index].marker?.remove();
    this.markers.splice(index, 1);
    this.saveMarkersLocalStorage();
  }

  flyTo(marker: mapboxgl.Marker) {
    this.map.flyTo({
      center: marker.getLngLat()
    })
  }
}
