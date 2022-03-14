import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private baseUrl: string = 'https://restcountries.com/v3.1';
  private endpointPais: string = 'name';
  private endpointCapital: string = 'capital';
  private endpointAlpha: string = 'alpha';

  constructor(private http: HttpClient) {}

  buscarPais(value: string): Observable<Pais[]> {
    const url = `${this.baseUrl}/${this.endpointPais}/${value}`;
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(value: string): Observable<Pais[]> {
    const url = `${this.baseUrl}/${this.endpointCapital}/${value}`;
    return this.http.get<Pais[]>(url);
  }

  buscarPorAlpha(value: string): Observable<Pais> {
    const url = `${this.baseUrl}/${this.endpointAlpha}/${value}`;
    return this.http.get<Pais>(url);
  }
}
