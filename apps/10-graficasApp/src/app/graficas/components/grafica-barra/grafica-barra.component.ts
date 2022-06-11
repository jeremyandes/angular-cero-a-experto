import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() isHorizontal: boolean = false;
  @Input() basicData: any;

  horizontalOptions: any;

  constructor() { }

  ngOnInit(): void {
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

  randomData() {
    const { labels } = this.basicData;

    this.basicData = {
      labels,
      datasets: [
        {
          label: 'Ventas',
          backgroundColor: '#b3e0ff',
          data: [
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
          ]
        },
        {
          label: 'Compras',
          backgroundColor: '#99ffcc',
          data: [
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
          ]
        },
        {
          label: 'Exportaciones',
          backgroundColor: '#ffc2b3',
          data: [
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
            (Math.random() * 100),
          ]
        }
      ]
    };
  }

}
