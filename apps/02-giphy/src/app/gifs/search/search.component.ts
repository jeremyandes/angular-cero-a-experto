import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search() {
    const value: string = this.inputSearch.nativeElement.value;

    if (value.trim().length === 0) return;

    this.gifsService.searchGifs(value);

    this.inputSearch.nativeElement.value = '';
  }
}
