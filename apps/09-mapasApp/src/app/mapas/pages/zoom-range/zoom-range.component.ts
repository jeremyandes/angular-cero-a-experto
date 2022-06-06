import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.styles.scss'],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  private map!: mapboxgl.Map;

  @ViewChild('mapa') mapContainer!: ElementRef;
  zoomLevel: number = 11;
  centerMap: [number, number] = [-57.53212015934875, -38.02606601755031];

  constructor() { }

  ngOnDestroy(): void {
    this.map.off('zoom', () => { })
    this.map.off('zoomend', () => { })
    this.map.off('move', () => { })
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centerMap,
      zoom: this.zoomLevel,
    });

    this.map.on('zoom', () => {
      this.zoomLevel = this.map.getZoom();
    });

    this.map.on('zoomend', () => {
      if (this.map.getZoom() > 18) { this.map.zoomTo(18); }
    });

    this.map.on('move', (event) => {
      const { target } = event;
      const { lng, lat } = target.getCenter();
      this.centerMap = [lng, lat];
    });
  }

  zoomIn() {
    this.map.zoomIn();
    this.zoomLevel = this.map.getZoom();
  }
  zoomOut() {
    this.map.zoomOut();
    this.zoomLevel = this.map.getZoom();
  }

  zoomChange(value: string) {
    this.map.zoomTo(Number(value));
  }

}
