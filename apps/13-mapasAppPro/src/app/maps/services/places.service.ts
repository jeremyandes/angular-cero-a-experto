import { Feature, PlacesResponse } from '../interfaces/places.interfaces';
import { Injectable } from '@angular/core';
import { PlacesApiClient } from '../api';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public userLocation?: [number, number] = undefined;
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  constructor(
    private mapService: MapService,
    private placesApi: PlacesApiClient,
  ) {
    this.getUserLocation();
  }

  get isUserLocationReady(): boolean { return !!this.userLocation; }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert('Error de geolocalización');
          console.error(err);
          reject(err);
        }
      )

    })
  }

  getPlacesByQuery(query: string = '') {
    if (!query) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }
    if (!this.userLocation) { throw new Error('Error en geolocalización'); }

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`${query}.json`, {
      params: {
        proximity: this.userLocation.join(',')
      }
    })
      .subscribe(resp => {
        this.places = resp.features;
        this.isLoadingPlaces = false;
        this.mapService.createMarkersFromPlaces(this.places, this.userLocation!);
      });
  }

  deletePlaces() { this.places = []; }
}
