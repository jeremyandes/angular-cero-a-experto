import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})
export class HeroeCardComponent {
  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
    console.log(this.heroe);
  }

}
