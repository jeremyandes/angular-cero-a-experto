import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private apiKey: string = 'h0lXkO2rN89vY3PLpQp23Se8J0su2WsP';
  private searchEndpoint: string = 'api.giphy.com/v1/gifs/search';

  public results: any[] = [];

  constructor(private http: HttpClient) {
    console.log('GifsService constructor');
  }

  get history() {
    return [...this._history];
  }

  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (this._history.includes(query)) return;

    this._history.unshift(query);
    this._history = this._history.splice(0, 10);

    const httpGet = this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
    );
    httpGet.subscribe((resp: any) => { this.results = resp.data; console.log(this.results) });
  }
}
