import { Component, Input } from '@angular/core';
import { DatasetInterface } from '../../interfaces/dataset.interface';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {
  dataSets: DatasetInterface[] = [
    {
      label: 'Ventas',
      backgroundColor: '#b3e0ff',
      data: [65, 59, 80, 81, 56, 55, 40, 50]
    },
    {
      label: 'Compras',
      backgroundColor: '#99ffcc',
      data: [28, 48, 40, 19, 86, 27, 90, 77]
    },
    {
      label: 'Exportaciones',
      backgroundColor: '#ffc2b3',
      data: [10, 15, 25, 20, 60, 43, 85, 92]
    }
  ];

  labels: string[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'];

  constructor() { }

}
