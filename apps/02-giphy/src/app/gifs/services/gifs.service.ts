import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';
import { LocalStorageService } from '../../services/local-storage.service';

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

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {
    console.log('GifsService constructor');

    this._history = this.localStorageService.history;
    this.results = this.localStorageService.results;
  }

  get history() {
    return [...this._history];
  }

  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      this.localStorageService.setHistory(this._history);
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '100')
      .set('q', query);

    const httpGet = this.http.get<SearchGifsResponse>(
      `${this.protocol}://${this.baseURL}/${this.searchEndpoint}`,
      { params }
    );

    httpGet.subscribe((resp) => {
      this.results = resp.data;
      this.localStorageService.setResults(this.results);
    });
  }
}
