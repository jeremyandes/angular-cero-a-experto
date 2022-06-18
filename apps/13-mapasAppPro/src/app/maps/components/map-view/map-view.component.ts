import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import MapboxGL from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapContainer') map!: ElementRef;

  constructor(
    private placesService: PlacesService,
  ) { }

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) { throw new Error('UseLocation error'); }

    const map = new MapboxGL.Map({
      container: this.map.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.placesService.useLocation,
      zoom: 9
    });
  }

}
