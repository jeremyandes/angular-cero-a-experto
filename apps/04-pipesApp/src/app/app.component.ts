import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  nombre: string = 'jErEmY aNdEs';
  valor: number = 1000;
  obj: object = {
    name: 'Asd',
    lastName: 'Qwe'
  };

  constructor (private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  mostrar() {
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }

}
