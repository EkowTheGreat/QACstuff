import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { HistoryDisplayComponent } from './history-display/history-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    CounterDisplayComponent,
    HistoryDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
