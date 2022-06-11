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

  labels: string[] = [];
  dataSets: MultiDatasetInterface[] = [];
  basicData!: BasicDataInterface;

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getDataUsers().subscribe({
      next: (resp) => console.log(resp),
      error: (err) => console.error(err),
    })
    // this.basicData = this.updateBasicData();
  }

  updateBasicData(): BasicDataInterface {
    return {
      labels: this.labels,
      datasets: this.dataSets,
    }
  }

  randomData() {
    this.dataSets.forEach((dataset: MultiDatasetInterface) => {
      dataset.data = [
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
      ]
    });

    this.basicData = this.updateBasicData();
  }

}
