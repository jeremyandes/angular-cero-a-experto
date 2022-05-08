import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, argument: boolean = true): string {
        return argument
            ? value.toLocaleUpperCase()
            : value.toLocaleLowerCase();
    }

}