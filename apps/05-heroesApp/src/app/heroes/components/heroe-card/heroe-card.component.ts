import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [`
    mat-card {
      margin: 20px 0;
    };
  `]
})
export class HeroeCardComponent {
  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
    console.log(this.heroe);
  }

}
