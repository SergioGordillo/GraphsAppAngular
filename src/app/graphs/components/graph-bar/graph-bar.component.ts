import { Component, Input} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styles: [
  ]
})
export class GraphBarComponent {

  @Input() horizontal: boolean = false; 
  @Input() title: string = "Percentaje of estimated sales for the next years"

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Lucía', backgroundColor:'#FA0FBA', hoverBackgroundColor: 'salmon'},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Sergio', backgroundColor:'#43CCFA', hoverBackgroundColor: 'salmon'},
    { data: [15, 70, 90, 30, 28, 17, 30], label: 'Javi', backgroundColor: '#FA5E0F', hoverBackgroundColor: 'salmon' },
    { data: [30, 10, 10, 11, 12, 14, 20], label: 'Miguel', backgroundColor: '#C2FA28', hoverBackgroundColor: 'salmon'}
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType='horizontalBar';
    }
  }

  public randomize(): void {
    this.barChartData.forEach((bar) => {
      bar.data = bar.data?.map(() => Math.round(Math.random() * 100));
    });
  }

}
