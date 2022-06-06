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

  constructor() { }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-57.53212015934875, -38.02606601755031],
      zoom: 17,
    });
  }

  zoomIn() {
    this.map.zoomIn();
    console.log('zoomIn', this.mapContainer);
  }
  zoomOut() {
    this.map.zoomOut();
    console.log('zoomOut', this.mapContainer);
  }

}
