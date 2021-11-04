import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent{

  public doughnutChartLabels: Label[] = ['Smith Rowe', 'Saka', 'Odegaard'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] =[
    {
      backgroundColor: [
        "#F93100",
        "#0D545D",
        "#E5EE1F"
      ] 
    }
  ]

  constructor() { }

}
