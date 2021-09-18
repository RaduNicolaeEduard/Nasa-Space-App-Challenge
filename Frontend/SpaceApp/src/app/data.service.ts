import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface reqResult {
  data: {
    Date: string;
    MonthlyAverage: string;
  };
  properties: {
    MaxYearlyOutput: number;
    AverageYearlyOutput: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'https://api.nicolae.systems/calc';
  currentData: reqResult = {
    data: {
      Date: '',
      MonthlyAverage: '',
    },
    properties: {
      MaxYearlyOutput: 0,
      AverageYearlyOutput: '',
    },
  };
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<reqResult>(this.url).pipe(
      map((res: any) => {
        var dataArray: reqResult = {
          data: {
            Date: '',
            MonthlyAverage: '',
          },
          properties: {
            MaxYearlyOutput: 0,
            AverageYearlyOutput: '',
          },
        };

        this.currentData = dataArray;
        return res;
      })
    );
  }

  getyAxisTicks() {
    var currentlyAxisTicks: number[];
    this.getData().subscribe((_) => {
      var maxYearlyOutput = this.currentData.properties.MaxYearlyOutput;
      currentlyAxisTicks = [
        0,
        Math.ceil(maxYearlyOutput / 5),
        Math.ceil(maxYearlyOutput / 2) - 1,
        Math.ceil(maxYearlyOutput / 2) + 1,
        Math.ceil(maxYearlyOutput - maxYearlyOutput / 5),
        Math.ceil(maxYearlyOutput),
      ];
    });
  }
}
