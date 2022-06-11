import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDataUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`)
      .pipe(
        delay(2000),
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          return { labels, values };
        })
      );
  }
}
