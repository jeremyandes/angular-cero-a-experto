import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  basicData: any;
  basicOptions!: any;
  // horizontalOptions: any;

  constructor() {

    this.basicData = {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
      datasets: [
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
      ]
    };

    // this.horizontalOptions = {
    //   indexAxis: 'y',
    //   plugins: {
    //     legend: {
    //       labels: {
    //         color: '#495057'
    //       }
    //     }
    //   },
    //   scales: {
    //     x: {
    //       ticks: {
    //         color: '#495057'
    //       },
    //       grid: {
    //         color: '#ebedef'
    //       }
    //     },
    //     y: {
    //       ticks: {
    //         color: '#495057'
    //       },
    //       grid: {
    //         color: '#ebedef'
    //       }
    //     }
    //   }
    // };
  }

  randomData() {
    console.log('randomData');
    this.basicData = {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
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
