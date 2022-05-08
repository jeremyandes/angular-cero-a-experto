import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroeImage'
})
export class HeroeImagePipe implements PipeTransform {

  transform(value: string | undefined): string {
    return value
      ? `assets/heroes/${value}.jpg`
      : `assets/no-image.png`;
  }

}
