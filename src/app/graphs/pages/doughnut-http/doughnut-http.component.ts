import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraphsServiceService } from '../../services/graphs-service.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
  ]
})
export class DoughnutHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] =[
    {
      backgroundColor: [
        "#1F53EE",
        "#F93100",
        "#1FEE24",
        "#781FEE",
        "#EE1F7A"
      ] 
    }
  ]

  constructor(private graphsServiceService:GraphsServiceService) { }

  ngOnInit(): void {
    this.graphsServiceService.getUsers()
    .subscribe( ({ labels, values }) => {

      this.doughnutChartLabels = labels;
      this.doughnutChartData.push( values );

    })
  }

}
