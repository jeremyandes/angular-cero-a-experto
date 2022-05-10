import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      height: auto !important;
    }
  `]
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
    private snackBar: MatSnackBar,
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
          next: () => this.showSnackBar(`Heroe <${this.heroe.superhero}> updated.`),
          error: (error) => console.error(error),
        })
      : this.heroesService.addHeroe(this.heroe)
        .subscribe({
          next: (resp) => {
            this.showSnackBar(`New heroe <${this.heroe.superhero}> added!`);
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
            this.showSnackBar(`Heroe <${this.heroe.superhero}> deleted.`)
            this.router.navigate(['/heroes']);
          },
          error: (error) => console.error(error)
        })
      : console.error(`Heroe <${this.heroe.superhero}> can't be deleted.`);
  }

  showSnackBar(message: string) {
    this.snackBar.open(
      message,
      'Close',
      {
        duration: 5000,
        // Implementar más argumentos
      }
    )
  }
}
