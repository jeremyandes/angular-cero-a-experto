import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
    mat-card {
      margin: 20px 0;
    };
  `]
})
export class ListComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes().subscribe({
      next: (heroes) => { this.heroes = heroes as Heroe[]; console.table(this.heroes); },
      error: (error) => console.error(error)
    });

  }

}
