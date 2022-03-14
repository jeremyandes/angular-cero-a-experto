import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onKeyEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  inputPais: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(350)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  buscar() {
    this.onKeyEnter.emit(this.inputPais);
  }

  teclaPresionada() {
    this.debouncer.next(this.inputPais);
  }
}
