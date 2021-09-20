import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface reqResult {
  data: {
    name: string;
    value: string;
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
  url = 'http://localhost:8080/calc';
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
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<reqResult[]>(this.url).pipe(
      map((res: any) => {
        this.currentData = res;
        return res;
      })
    );
  }


}
