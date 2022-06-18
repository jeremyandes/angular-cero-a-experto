import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapContainer') map!: ElementRef;

  constructor(
    private placesService: PlacesService,
    private mapService: MapService,
  ) { }

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) { throw new Error('UseLocation error'); }

    const map = new Map({
      container: this.map.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.placesService.useLocation,
      zoom: 9
    });

    const popup = new Popup()
      .setHTML(`
        <div class="p-1">
          <h6>Aquí estoy</h6>
          <span>Estoy en este lugar del mundo</span>
        </div>
      `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.useLocation)
      .setPopup(popup)
      .addTo(map);

    this.mapService.map = map;
  }

}
