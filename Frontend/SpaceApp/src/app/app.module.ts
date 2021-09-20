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
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [AppComponent, MainComponent, VerticalChartComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
