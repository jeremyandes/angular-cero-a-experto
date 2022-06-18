import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places.interfaces';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  public selectedId: string = '';

  constructor(
    private placesService: PlacesService,
    private mapService: MapService,
  ) { }

  get isLoadingPlaces(): boolean { return this.placesService.isLoadingPlaces; }
  get places(): Feature[] { return this.placesService.places; }

  flyTo(place: Feature) {
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat]);
    this.selectedId = place.id;
  }

}
