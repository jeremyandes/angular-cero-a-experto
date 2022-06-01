import { Injectable } from '@angular/core';
import { RegionEnum } from '../enums/region.enum';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _regiones: string[] = [];

  constructor() {
    this.regiones = [...Object.values(RegionEnum)] || [];
  }

  get regiones(): string[] { return this._regiones; }

  set regiones(regiones: string[]) { this._regiones = regiones; }
}
