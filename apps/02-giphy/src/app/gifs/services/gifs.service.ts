import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private apiKey: string = 'h0lXkO2rN89vY3PLpQp23Se8J0su2WsP';

  constructor() {
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
    console.log(this._history);
  }
}
