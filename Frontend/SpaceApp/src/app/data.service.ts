import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<reqResult>(this.url).pipe(
      map((res: any) => {
        // console.log(res);
        var dataArray: reqResult = {
          data: {
            Date: '',
            MonthlyAverage: '',
          },
          properties: {
            MaxYearlyOutput: 0,
            AverageYearlyOutput: '',
          }
        };

        dataArray = res;
        // for (const key in res) {
        //   if (res.hasOwnProperty(key)) {
        //     console.log(res[key]);

        //     // dataArray.push({ ...res[key] });
        //   }
        // }
        // console.log(dataArray);
        return res;
      })
    );
  }
}
