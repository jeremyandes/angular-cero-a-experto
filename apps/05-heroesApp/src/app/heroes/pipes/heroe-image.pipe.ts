import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroeImage'
})
export class HeroeImagePipe implements PipeTransform {

  transform(value: string | undefined): string {
    console.log(value);
    return value
      ? `assets/heroes/${value}.jpg`
      : `assets/no-image.png`;
  }

}
