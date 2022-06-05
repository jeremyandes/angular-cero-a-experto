import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit, OnChanges {
  private componentTitle: string = 'MuestraNombre.component';

  @Input() nombre!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.componentTitle, '<< ngOnChanges >>', changes);
  }

  ngOnInit(): void {
  }

}
