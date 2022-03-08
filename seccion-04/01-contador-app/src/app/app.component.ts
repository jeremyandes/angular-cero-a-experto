import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contador App';
  number: number = 10;

  sumar(){ this.number++; }
  restar(){ this.number--; }
}
