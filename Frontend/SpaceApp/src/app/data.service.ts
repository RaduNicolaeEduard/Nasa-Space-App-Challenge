import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:8080/calc';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url).subscribe((res) => {
      console.log(res);
    });
  }
}
