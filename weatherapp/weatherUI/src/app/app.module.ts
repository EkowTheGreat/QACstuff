import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { WeatherSummaryComponent } from './weather-summary/weather-summary.component';
import { WeatherForTodayComponent } from './weather-for-today/weather-for-today.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationSearchComponent,
    WeatherSummaryComponent,
    WeatherForTodayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
