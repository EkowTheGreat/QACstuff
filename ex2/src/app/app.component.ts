import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  history = [];

  updateCounter(amount): void {
    if (amount === 0) {
      this.counter = 0;
    } else {
      this.counter += amount;
    }
    this.history.push(this.counter);
  }
}
