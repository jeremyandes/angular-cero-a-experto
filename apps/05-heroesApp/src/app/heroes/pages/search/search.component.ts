import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  heroSearch: string = '';
  heroes: Heroe[] = [];
  selectedHeroe: Heroe | undefined;
  isHeroe: boolean = true;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.getSuggests(this.heroSearch).subscribe(heroes => this.heroes = heroes);
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHeroe = undefined;
      return;
    }
    const { superhero, id } = event.option.value;
    this.heroSearch = superhero;

    this.heroesService.getHeroe(id).subscribe(heroe => this.selectedHeroe = heroe);
  }

}
