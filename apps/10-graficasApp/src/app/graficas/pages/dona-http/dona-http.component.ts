import { Component, OnInit } from '@angular/core';
import { BasicDataInterface } from '../../interfaces/basic-data.interface';
import { MultiDatasetInterface } from '../../interfaces/multi-dataset.interface';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  labels: string[] = ['Ventas', 'Compras', 'Exportaciones'];

  dataSets: MultiDatasetInterface[] = [
    {
      data: [65, 59, 80],
      backgroundColor: ['#b3e0ff', '#99ffcc', '#ffc2b3'],
    },
  ];

  loading: boolean = true;

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getDataUsers().subscribe({
      next: (data) => {
        this.loading = true;
        this.labels = Object.keys(data);
        this.dataSets[0].data = [...Object.values(data)] as number[];
      },
      error: (err) => console.error(err),
      complete: () => this.loading = false,
    })
  }

}
