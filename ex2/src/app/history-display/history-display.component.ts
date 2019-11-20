import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-display',
  templateUrl: './history-display.component.html',
  styleUrls: ['./history-display.component.css']
})
export class HistoryDisplayComponent {
  @Input() history: number[];
}
