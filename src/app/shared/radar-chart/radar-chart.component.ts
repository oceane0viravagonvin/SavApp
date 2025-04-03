import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart, RadarController, RadialLinearScale, PointElement,LineElement, Filler, Tooltip, Legend, ChartConfiguration } from 'chart.js';


// 👇 Très important : ce bloc doit être exécuté avant toute création de chart :
Chart.register( RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent implements AfterViewInit {
    @Input() title: string = 'Diagramme Radar';
    @Input() scores: number[] = [];
  
    @ViewChild('radarCanvas') radarCanvas!: ElementRef;
  
    readonly labels = [
      'Douceur',
      'Lavant',
      'Volume mousse',
      'Tenue mousse',
      'Dureté',
      'Solubilité',
      'Séchage'
    ];
  
    ngAfterViewInit(): void {
      new Chart(this.radarCanvas.nativeElement, {
        type: 'radar',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: this.title,
              data: this.scores,
              fill: true,
              backgroundColor: 'rgba(210, 0, 255, 0.2)',
              borderColor: 'rgb(210, 0, 255)',
              pointBackgroundColor: 'rgb(0, 180, 0)',
              pointBorderColor: 'rgb(0, 180, 0)',
              pointHoverBackgroundColor: 'rgb(255, 255, 255)',
              pointHoverBorderColor: 'rgb(0, 180, 0)'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 10,
              ticks: { stepSize: 1 }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
          }
        }
      });
    }
}
