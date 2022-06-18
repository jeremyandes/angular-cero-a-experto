import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public useLocation?: [number, number] = undefined;
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  constructor(
    private http: HttpClient,
  ) {
    this.getUserLocation();
  }

  get isUserLocationReady(): boolean { return !!this.useLocation; }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
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
    if (!query) { return; }

    this.isLoadingPlaces = true;

    this.http.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=5&proximity=-57.532310079476204%2C-38.0284289294272&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoiamVyZW15YW5kZXMiLCJhIjoiY2w0MXcydjlnMjhwczNqbzJkaG5sbGczYSJ9.0hZyYK8dDvPsMoPVcmcryg`)
      .subscribe(resp => {
        console.log(resp.features);

        this.places = resp.features;
        this.isLoadingPlaces = false;
      });
  }
}
