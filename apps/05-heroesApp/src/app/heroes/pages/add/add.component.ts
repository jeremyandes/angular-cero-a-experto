import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'

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

  constructor(
    private router: Router,
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesService.getHeroe(id))
        )
        .subscribe((heroe) => this.heroe = heroe);
    } else {
      return;
    }
  }

  saveHeroe() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    this.heroe.id
      ? this.heroesService.updateHeroe(this.heroe)
        .subscribe({
          next: (resp) => console.log('Updated', resp),
          error: (error) => console.error(error),
        })
      : this.heroesService.addHeroe(this.heroe)
        .subscribe({
          next: (resp) => {
            console.log('Added', resp);
            this.router.navigate(['/heroes/edit', resp.id])
          },
          error: (error) => console.error(error),
        });;
  }

  deleteHeroe() {
    this.heroe.id
      ? this.heroesService.deleteHeroe(this.heroe.id)
        .subscribe({
          next: (resp) => {
            console.log(resp);
            this.router.navigate(['/heroes']);
          },
          error: (error) => console.error(error)
        })
      : console.error(`Heroe ${this.heroe.superhero} can't be deleted.`);
  }

}
