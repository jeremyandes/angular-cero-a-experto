import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss']
})
export class BtnMyLocationComponent {

  constructor(
    private placesService: PlacesService,
    private mapService: MapService,
  ) { }

  goToMyLocation() {
    if (!this.placesService.isUserLocationReady) { throw new Error('Error en geolocalización'); }
    if (!this.mapService.isMapReady) { throw new Error('Mapa no inicializado'); }

    this.mapService.flyTo(this.placesService.userLocation!);
  }

}
