import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLowerCase: string = 'jeremy';
  nombreUpperCase: string = 'JEREMY';
  nombreCompleto: string = 'jErEmY aNdEs';

  fecha: Date = new Date();

}
