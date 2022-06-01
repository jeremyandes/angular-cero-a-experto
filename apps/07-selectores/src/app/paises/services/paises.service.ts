import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RegionEnum } from '../enums/region.enum';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _regiones: string[] = [];
  private baseUrl: string = 'https://restcountries.com/v3.1/';
  private httpParams: HttpParams = new HttpParams()
    .set('fields', `name,cca3`);

  constructor(
    private http: HttpClient,
  ) {
    this.regiones = [...Object.values(RegionEnum)] || [];
  }

  get regiones(): string[] { return this._regiones; }
  set regiones(regiones: string[]) { this._regiones = regiones; }

  getRegiones(region: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.baseUrl}/region/${region}/`, { params: this.httpParams });
  }
}
