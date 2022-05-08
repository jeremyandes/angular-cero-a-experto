import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;
  param: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroe(id))
    ).subscribe({
      next: (heroe) => this.heroe = heroe as Heroe,
      error: (error) => console.error(error)
    })

  }

}
