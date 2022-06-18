import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import MapboxGL from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

if (!navigator.geolocation) {
  alert('Navegador no soporta la geolocalización');
  throw new Error('Navegador no soporta la geolocalización');
}

if (environment.production) {
  enableProdMode();
}

MapboxGL.accessToken = 'pk.eyJ1IjoiamVyZW15YW5kZXMiLCJhIjoiY2w0MXc2NjU2MW82bzNqbzRyc3d6NmM5cCJ9.zKS8iFDQt_WDrmDC1rGhog';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
