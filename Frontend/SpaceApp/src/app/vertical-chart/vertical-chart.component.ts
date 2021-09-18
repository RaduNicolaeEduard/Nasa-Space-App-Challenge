import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { reqResult } from '../data.service';

@Injectable()
@Component({
  selector: 'app-vertical-chart',
  templateUrl: './vertical-chart.component.html',
  styleUrls: ['./vertical-chart.component.css'],
})
export class VerticalChartComponent implements OnInit {
  timedData?: { Date: string; MonthlyAverage: string; };
  maxYearlyOutput?: number;

  view: number[] = [700, 370];

  // options
  // legendTitle: string = '';
  // legendTitleMulti: string = 'Months';
  // legendPosition: string = 'below'; // ['right', 'below']
  // legend: boolean = true;

  constructor(private dataService: DataService) {}
  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Average';
  xAxisLabel: string = 'Months';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;

  maxOutput = 11; //request maxyearlyoutput from api
  yAxisTicks: any[] = [
    0,
    Math.ceil(this.maxOutput / 5),
    Math.ceil(this.maxOutput / 2) - 1,
    Math.ceil(this.maxOutput / 2) + 1,
    Math.ceil(this.maxOutput - this.maxOutput / 5),
    Math.ceil(this.maxOutput),
  ];

  animations: boolean = true; // animations on load

  showGridLines: boolean = true; // grid lines

  showDataLabel: boolean = true; // numbers on bars

  gradient: boolean = false;
  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F'],
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

  activeEntries: any[] = ['book'];
  barPadding: number = 5;
  tooltipDisabled: boolean = false;

  yScaleMax: number = 9000;

  roundEdges: boolean = false;

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      this.timedData = res.data;
      this.maxYearlyOutput = res.properties.MaxYearlyOutput;
      // console.log(this.timedData);
      // console.log(this.maxYearlyOutput);
      // console.log(res);
      console.log(this.maxYearlyOutput);
      
      
    });
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase();
  }

  formatNumber(input: number): number {
    return input;
  }
}
