import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'heroeImage'
})
export class HeroeImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return heroe.alt_img
      ? `${heroe.alt_img}`
      : heroe.id
        ? `assets/heroes/${heroe.id}.jpg`
        : `assets/no-image.png`;
  }

}
