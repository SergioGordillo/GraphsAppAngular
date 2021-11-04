import { Component} from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent {



  dataProviders: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Mbappé' },
    { data: [ 50,250,30, 450,200 ], label: 'Odegaard' },
  ];
  
  labelsProviders: string[] = ['2021', '2022','2023','2024','2025'];
  
  dataProduct: ChartDataSets[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'T-Shirts', backgroundColor: 'blue' },
  ];


}
