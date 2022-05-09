import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: '',
  }

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  saveHeroe() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    this.heroesService.addHeroe(this.heroe)
      .subscribe({
        next: (resp) => console.log(resp),
        error: (error) => console.error(error),
      });

  }

}
