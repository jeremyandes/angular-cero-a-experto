import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  search() {
    const value: string = this.inputSearch.nativeElement.value;
    console.log(value);

    this.inputSearch.nativeElement.value = '';
  }
}
