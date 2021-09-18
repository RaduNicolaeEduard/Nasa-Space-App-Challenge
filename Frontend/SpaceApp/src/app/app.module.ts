import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { VerticalChartComponent } from './vertical-chart/vertical-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, MainComponent, VerticalChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
