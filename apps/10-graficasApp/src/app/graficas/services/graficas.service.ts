import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDataUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
}
