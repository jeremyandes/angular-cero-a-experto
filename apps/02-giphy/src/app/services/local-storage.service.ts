import { Injectable } from '@angular/core';
import { Gif } from '../gifs/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  get history() {
    return JSON.parse(localStorage.getItem('history')!) || [];
  }
  get results() {
    return JSON.parse(localStorage.getItem('results')!) || [];
  }
  
  setHistory(value: string[]) {
    localStorage.setItem('history', JSON.stringify(value));
  }

  setResults(value: Gif[]) {
    localStorage.setItem('results', JSON.stringify(value));
  }
}
