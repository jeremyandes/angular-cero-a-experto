import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLowerCase: string = 'jeremy';
  nombreUpperCase: string = 'JEREMY';
  nombreCompleto: string = 'jErEmY aNdEs';

  constructor() { }

  ngOnInit(): void {
  }

}
