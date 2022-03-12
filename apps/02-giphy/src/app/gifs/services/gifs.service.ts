import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private protocol: string = 'https';
  private baseURL: string = 'api.giphy.com/v1/gifs';
  private apiKey: string = 'h0lXkO2rN89vY3PLpQp23Se8J0su2WsP';

  private searchEndpoint: string = 'search';

  private _history: string[] = [];
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    console.log('GifsService constructor');

    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  get history() {
    return [...this._history];
  }

  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const httpGet = this.http.get<SearchGifsResponse>(
      `${this.protocol}://${this.baseURL}/${this.searchEndpoint}?api_key=${this.apiKey}&q=${query}&limit=10`
    );

    httpGet.subscribe((resp) => {
      this.results = resp.data;
      localStorage.setItem('results', JSON.stringify(this.results));
    });
  }
}
