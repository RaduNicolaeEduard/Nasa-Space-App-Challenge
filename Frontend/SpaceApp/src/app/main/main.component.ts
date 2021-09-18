import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8080/calc';
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    return this.http.get(this.url).subscribe((res) => {
      console.log(res);
    });
  }
}
