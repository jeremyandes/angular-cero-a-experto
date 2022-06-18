import { Injectable } from '@angular/core';
import { LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { DirectionsApiClient } from '../api';
import { DirectionsResponse, Route } from '../interfaces/directions.interface';
import { Feature } from '../interfaces/places.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private _map?: Map;
  private markers: Marker[] = [];

  constructor(
    private directionsApi: DirectionsApiClient,
  ) { }

  get isMapReady(): boolean { return !!this._map; }
  set map(map: Map) { this._map = map; }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) { throw new Error('Mapa no inicializado'); }

    this._map?.flyTo({
      zoom: 14,
      center: coords,
    })
  }

  createMarkersFromPlaces(places: Feature[], userLocation: [number, number]) {
    if (!this._map) { throw new Error('Mapa no inicializado'); }

    this.markers.forEach(marker => marker.remove());

    const newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup: Popup = new Popup()
        .setHTML(`
          <div class="p-1">
            <h6>${place.text_es}</h6>
            <span>${place.place_name_es}</span>
          </div>
        `);

      const newMarker: Marker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this._map);

      newMarkers.push(newMarker);
    }

    this.markers = newMarkers;

    if (places.length === 0) { return; }

    // Limites del mapa
    const bounds = new LngLatBounds();
    this.markers.forEach(marker => bounds.extend(marker.getLngLat()));
    bounds.extend(userLocation);

    this._map.fitBounds(bounds, {
      padding: 200,
    })
  }

  getRouteBetweenPoints(start: [number, number], end: [number, number]) {
    this.directionsApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`)
      .subscribe({
        next: (resp) => {
          this.drawPolyline(resp.routes[0]);
        },
        error: (err) => console.error(err),
      });
  }

  private drawPolyline(route: Route) {
    if (!route.distance) { return; }
    if (!this._map) { throw new Error('Mapa no inicializado'); }

    console.log({ distance: route.distance / 1000, duration: route.duration / 60 });

    const coords = route.geometry.coordinates;

    const bounds = new LngLatBounds();
    coords.forEach(([lng, lat]) => bounds.extend([lng, lat]));

    this._map?.fitBounds(bounds, { padding: 200 });
  }
}
