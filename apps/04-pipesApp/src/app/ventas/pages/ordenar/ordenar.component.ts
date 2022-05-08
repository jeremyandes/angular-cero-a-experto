import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  toggle: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.amarillo
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ];
  ordenActual: string = 'nombre';
  reversed: boolean = false;

  mayusculasToggle() {
    this.toggle = this.toggle ? false : true;
  }
  ordenarPor(value: string) {
    if(value != this.ordenActual) {
      this.reversed = false;
      this.ordenActual = value;
    }else{
      this.reversed = !this.reversed;
    }
  }

}
