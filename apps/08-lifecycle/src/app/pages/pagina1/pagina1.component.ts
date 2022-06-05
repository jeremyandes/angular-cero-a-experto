import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

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
  nombre: string = 'Jeremy';
  segundos: number = 0;

  private subscriptions: Subscription[] = [];

  constructor() {
    console.warn('Constructor');
  }

  ngOnInit(): void {
    console.log('<< ngOnInit >>');
    const subscription: Subscription = interval(1000).subscribe(i => {
      this.segundos = i;
      console.log(this.segundos);
    })
    this.subscriptions.push(subscription);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('<< ngOnChanges >>', changes);
  }

  ngDoCheck(): void {
    console.log('<< ngDoCheck >>');
  }

  ngAfterContentInit(): void {
    console.log('<< ngAfterContentInit >>');
  }

  ngAfterContentChecked(): void {
    console.log('<< ngAfterContentChecked >>');
  }

  ngAfterViewInit(): void {
    console.log('<< ngAfterViewInit >>');
  }

  ngAfterViewChecked(): void {
    console.log('<< ngAfterViewChecked >>');
  }

  ngOnDestroy(): void {
    console.error('<< ngOnDestroy >>');
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  guardar() { }

}
