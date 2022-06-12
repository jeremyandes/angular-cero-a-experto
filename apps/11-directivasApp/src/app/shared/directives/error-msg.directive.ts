import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() {
    console.log('Constructor directive');
  }

  ngOnInit(): void {
    console.log('<< NgOnInit >> directive');
  }

}
