import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [``]
})
export class MenuComponent {
  items: MenuItem[] = [
    {
      label: 'Barras',
      icon: 'pi pi-fw pi-chart-bar',
      routerLink: '/graficas/barras'
    },
    {
      label: 'Barras Doble',
      icon: 'pi pi-fw pi-chart-bar',
      routerLink: '/graficas/barras-doble'
    },
    {
      label: 'Dona',
      icon: 'pi pi-fw pi-chart-pie',
      routerLink: '/graficas/dona'
    },
    {
      label: 'Dona Http',
      icon: 'pi pi-fw pi-chart-pie',
      routerLink: '/graficas/dona-http'
    },
  ];

  constructor() { }

}
