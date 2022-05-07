import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  collapsed: boolean = true;

  nombre: string = 'Jeremy';
  genero: string = 'male';

  selectMap: any = {
    'male': 'bienvenido',
    'female': 'bienvenida',
  }

  clientes: string[] = ['Laura', 'Pedro', 'Juan', 'Juana', 'Jeremy', 'Camila', 'Thiago'];
  clientesMap: any = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': `tenemos ${this.clientes.length} clientes esperando`,
  }

  persona: object = {
    nombre: 'Jeremy',
    edad: 23,
    localidad: 'Mar del Plata, Argentina'
  }

  miObservable: Observable<number> = interval(1000);

  valorPromesa = new Promise((resolve) => {
    setTimeout(() => resolve('Tenemos data de promesa'), 3500)
  })

  public cambiarGenero(): void {
    if (this.genero == 'male') {
      this.nombre = 'Camila'
      this.genero = 'female';
    } else {
      this.nombre = 'Jeremy';
      this.genero = 'male';
    }
  }

  public agregarcliente(): void {
    this.clientes.push(`Cliente ${this.clientes.length + 1}`);
  }
  public borrarCliente(): void {
    this.clientes.pop();
  }

}
