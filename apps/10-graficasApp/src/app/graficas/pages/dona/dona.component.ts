import { Component, OnInit } from '@angular/core';
import { MultiDatasetInterface } from '../../interfaces/multi-dataset.interface';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  labels: string[] = ['Ventas', 'Compras', 'Exportaciones'];

  dataSets: MultiDatasetInterface[] = [
    {
      data: [65, 59, 80],
      backgroundColor: ['#b3e0ff', '#99ffcc', '#ffc2b3'],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
