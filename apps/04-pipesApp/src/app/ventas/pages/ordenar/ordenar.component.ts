import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  toggle: boolean = false;

  mayusculasToggle() {
    this.toggle = this.toggle ? false : true;
  }

}
