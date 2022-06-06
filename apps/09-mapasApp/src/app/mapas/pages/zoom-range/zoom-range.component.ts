import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.styles.scss'],
})
export class ZoomRangeComponent implements AfterViewInit {
  private map!: mapboxgl.Map;

  @ViewChild('mapa') mapContainer!: ElementRef;
  zoomLevel: number = 17;

  constructor() { }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-57.53212015934875, -38.02606601755031],
      zoom: this.zoomLevel,
    });

    this.map.on('zoom', () => {
      this.zoomLevel = this.map.getZoom();
    });
    this.map.on('zoomend', () => {
      if (this.map.getZoom() > 18) { this.map.zoomTo(18); }
    });
  }

  zoomIn() {
    this.map.zoomIn();
    console.log('zoomIn', this.mapContainer);
    this.zoomLevel = this.map.getZoom();
  }
  zoomOut() {
    this.map.zoomOut();
    console.log('zoomOut', this.mapContainer);
    this.zoomLevel = this.map.getZoom();
  }

  zoomChange(value: string) {
    this.map.zoomTo(Number(value));
  }

}
