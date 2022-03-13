import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private baseUrl: string = 'https://restcountries.com/v3.1';
  private endpointPais: string = 'name';

  constructor(private http: HttpClient) {}

  buscarPais(value: string): Observable<any> {
    const url = `${this.baseUrl}/${this.endpointPais}/${value}`;
    return this.http.get(url);
  }
}
