import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {
  componentTitle: string = 'pagina1.component';

  constructor() {
    console.log('Constructor', this.componentTitle);
  }

  ngOnInit(): void {
    console.log(this.componentTitle, '<< ngOnInit >>');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.componentTitle, '<< ngOnChanges >>', changes);
  }

  ngDoCheck(): void {
    console.log(this.componentTitle, '<< ngDoCheck >>');
  }

  ngAfterContentInit(): void {
    console.log(this.componentTitle, '<< ngAfterContentInit >>');
  }

  ngAfterContentChecked(): void {
    console.log(this.componentTitle, '<< ngAfterContentChecked >>');
  }

  ngAfterViewInit(): void {
    console.log(this.componentTitle, '<< ngAfterViewInit >>');
  }

  ngAfterViewChecked(): void {
    console.log(this.componentTitle, '<< ngAfterViewChecked >>');
  }

  ngOnDestroy(): void {
    console.log(this.componentTitle, '<< ngOnDestroy >>');
  }

}
