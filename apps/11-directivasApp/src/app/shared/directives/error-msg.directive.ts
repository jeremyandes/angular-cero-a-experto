import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  private _mensaje: string = 'Campo requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set mensaje(value: string) {
    this._mensaje = value;
    this.setMensaje();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // console.log(this.color); //imprime 'undefined'
    // console.log(this.mensaje); //imprime 'undefined'

    this.setColor();
    this.setMensaje();
    this.setClase();
  }

  ngOnChanges(changes: SimpleChanges): void {

    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   const el: HTMLElement = this.htmlElement.nativeElement;
    //   el.innerText = mensaje;
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   const el: HTMLElement = this.htmlElement.nativeElement;
    //   el.style.color = color;
    // }

    console.log(changes);
    this.setClase();
  }

  setColor(): void {
    const el: HTMLElement = this.htmlElement.nativeElement;
    el.style.color = this._color;
    el.classList.add('form-text');
  }

  setMensaje(): void {
    const el: HTMLElement = this.htmlElement.nativeElement;
    el.innerText = this._mensaje;
  }

  setClase(): void {
    const el: HTMLElement = this.htmlElement.nativeElement;
    el.classList.add('form-text');
  }
}
