import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public useLocation?: [number, number] = undefined;

  constructor() {
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
}
