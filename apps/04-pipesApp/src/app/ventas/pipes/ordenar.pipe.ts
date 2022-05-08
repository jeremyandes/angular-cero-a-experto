import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string, reversed?: boolean): Heroe[] {
    let result: Heroe[];

    switch (ordenarPor) {
      case 'nombre':
        result = heroes.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
        break;
      case 'vuela':
        result = heroes.sort((a, b) => a.vuela ? -1 : 1);
        break;
      case 'color':
        result = heroes.sort((a, b) => a.color > b.color ? 1 : -1);
        break;

      default: result = heroes;
    }

    return reversed
      ? result.reverse()
      : result;

  }

}
