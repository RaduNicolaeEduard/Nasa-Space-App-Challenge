import { Component, Injectable, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { DataService } from '../data.service';
import { reqResult } from '../data.service';
@Injectable()
@Component({
  selector: 'app-vertical-chart',
  templateUrl: './vertical-chart.component.html',
  styleUrls: ['./vertical-chart.component.scss'],
})
export class VerticalChartComponent implements OnInit {
  timedData: any = [];
  maxYearlyOutput: number = 0;

  view: number[] = [700, 370];
  yAxisTicks: number[] = [];
  currentData: reqResult = {
    data: {
      name: '',
      value: '',
    },
    properties: {
      MaxYearlyOutput: 0,
      AverageYearlyOutput: '',
    },
  };
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

  // maxOutput = 11; //request maxyearlyoutput from api

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

  ngOnInit(): void {
    this.dataService
      .getData()
      .pipe(
        finalize(() => {
          console.log('req ended');
          console.log(this.timedData);
        })
      )
      .subscribe((res) => {
        console.log('res ' + res);

        this.timedData = res.data;
        this.maxYearlyOutput = res.properties.MaxYearlyOutput;
        console.log('max output in get: ' + this.maxYearlyOutput);
        this.currentData = this.dataService.currentData;
      });
  }

  getTimedData() {
    return this.timedData;
  }

  // getYaxisTicks() {
  //   return this.yAxisTicks;
  // }

  // getyAxisTicks() {
  //   var currentlyAxisTicks: number[];
  //   var maxYearlyOutput = this.maxYearlyOutput;

  //   currentlyAxisTicks = [
  //     0,
  //     Math.ceil(maxYearlyOutput / 5),
  //     Math.ceil(maxYearlyOutput / 2) - 1,
  //     Math.ceil(maxYearlyOutput / 2) + 1,
  //     Math.ceil(maxYearlyOutput - maxYearlyOutput / 5),
  //     Math.ceil(maxYearlyOutput),
  //   ];
  //   console.log(currentlyAxisTicks);

  //   return currentlyAxisTicks;
  // }

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
