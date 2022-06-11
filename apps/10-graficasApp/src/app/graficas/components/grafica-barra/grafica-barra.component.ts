import { Component, Input, OnInit } from '@angular/core';
import { BasicDataInterface } from '../../interfaces/basic-data.interface';
import { DatasetInterface } from '../../interfaces/dataset.interface';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() labels!: string[];
  @Input() dataSets!: DatasetInterface[];
  @Input() isHorizontal: boolean = false;

  basicData!: BasicDataInterface;
  horizontalOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.basicData = this.updateBasicData();

    if (this.isHorizontal) {
      this.horizontalOptions = {
        indexAxis: 'y',
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          }
        }
      };
    }
  }

  updateBasicData(): BasicDataInterface {
    return {
      labels: this.labels,
      datasets: this.dataSets,
    }
  }

  randomData() {
    this.dataSets.forEach((dataset: DatasetInterface) => {
      dataset.data = [
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
        (Math.random() * 100),
      ]
    });

    this.basicData = this.updateBasicData();
  }

}
