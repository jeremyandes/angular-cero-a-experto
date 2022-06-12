import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'Campo requerido';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  ngOnChanges(changes: SimpleChanges): void {

    const mensaje = changes['mensaje'].currentValue;
    this.htmlElement.nativeElement.innerText = mensaje;

    console.log(changes);
  }

  setColor(): void {
    const el: HTMLElement = this.htmlElement.nativeElement;
    el.style.color = this.color;
    el.classList.add('form-text');
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }
}
