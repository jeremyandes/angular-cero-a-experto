import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  heroes: object = {};

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes().subscribe({
      next: (resp) => { this.heroes = resp; console.table(this.heroes); },
      error: error => console.error(error)
    });

  }

}
