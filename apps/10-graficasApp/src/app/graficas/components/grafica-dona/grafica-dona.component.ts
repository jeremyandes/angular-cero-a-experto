import { Component, Input, OnInit } from '@angular/core';
import { BasicDataInterface } from '../../interfaces/basic-data.interface';
import { DatasetInterface } from '../../interfaces/dataset.interface';
import { MultiDatasetInterface } from '../../interfaces/multi-dataset.interface';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [`
    .card {
      max-width: 700px;
    }
  `]
})
export class GraficaDonaComponent implements OnInit {

  @Input() labels!: string[];
  @Input() dataSets!: MultiDatasetInterface[];
  @Input() disableUpdate?: boolean;

  basicData!: BasicDataInterface;

  constructor() { }

  ngOnInit(): void {
    this.basicData = this.updateBasicData();
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
