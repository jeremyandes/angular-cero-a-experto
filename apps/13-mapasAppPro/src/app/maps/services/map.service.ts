import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private _map?: Map;

  constructor() { }

  get isMapReady(): boolean { return !!this._map; }
  set map(map: Map) { this._map = map; }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) { throw new Error('Mapa no inicializado'); }

    this._map?.flyTo({
      zoom: 14,
      center: coords,
    })
  }
}
