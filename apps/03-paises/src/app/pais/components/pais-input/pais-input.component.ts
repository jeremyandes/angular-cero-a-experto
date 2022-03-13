import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent {
  @Output() onKeyEnter: EventEmitter<string> = new EventEmitter();

  inputPais: string = '';

  constructor() {}

  buscar() {
    this.onKeyEnter.emit(this.inputPais);
  }
}
