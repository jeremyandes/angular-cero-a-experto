import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true,
    }]
})
export class CustomMinDirective implements Validator {

    @Input() minimo!: number;

    constructor() { }

    validate(control: AbstractControl): ValidationErrors | null {
        console.log('Directiva', this.minimo);
        console.log(control.value);

        return control.value < this.minimo
            ? { 'customMin': true }
            : null;
    }

}