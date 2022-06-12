import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'text-danger';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void {
    this.htmlElement.nativeElement.classList.add(this.color);
  }
}
