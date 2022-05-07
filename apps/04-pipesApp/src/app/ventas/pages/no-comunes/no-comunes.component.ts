import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Jeremy';
  genero: string = 'male';

  selectMap = {
    'male': 'bienvenido',
    'female': 'bienvenida',
  }

  clientes: string[] = [];
  clientesMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': `tenemos ${this.clientes.length} clientes esperando`,
  }

  public cambiarGenero(): void {
    this.genero == 'male'
      ? this.genero = 'female'
      : this.genero = 'male'
  }

  public agregarcliente(): void {
    this.clientes.push(`Cliente ${this.clientes.length + 1}`);
  }

}
