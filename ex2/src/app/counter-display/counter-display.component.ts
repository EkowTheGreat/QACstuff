import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent {
  @Input() counter: number;
  isOdd(){
  if (this.counter%2==0){
    return true;
  }
  
}
}

