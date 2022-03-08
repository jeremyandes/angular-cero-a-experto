import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contador App';
  number: number = 10;

  base: number = 15;

  changeNumber(value: number) { this.number += value; }
}
