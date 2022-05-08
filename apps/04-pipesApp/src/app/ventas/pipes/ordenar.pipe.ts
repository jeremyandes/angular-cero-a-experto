import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], reversed?: boolean): Heroe[] {
    const result: Heroe[] = heroes.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    return reversed
      ? result.reverse()
      : result;
  }

}
