import { Component, OnInit } from '@angular/core';




interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    ul {
      cursor: pointer;
    }
  `]
})
export class SidemenuComponent implements OnInit {
  templateItems: MenuItem[] = [
    {
      text: 'Básicos',
      route: 'template/basicos'
    },
    {
      text: 'Dinámicos',
      route: 'template/dinamicos'
    },
    {
      text: 'Switches',
      route: 'template/switches'
    },
  ];

  reactiveItems: MenuItem[] = [
    {
      text: 'Básicos',
      route: 'reactive/basicos'
    },
    {
      text: 'Dinámicos',
      route: 'reactive/dinamicos'
    },
    {
      text: 'Switches',
      route: 'reactive/switches'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
