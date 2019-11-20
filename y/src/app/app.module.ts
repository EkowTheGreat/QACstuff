import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { HistoryComponent } from './history/history.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    HistoryComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
