import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  @Output() buttonClick = new EventEmitter();

  onButtonClicked(amount) {
    this.buttonClick.emit(amount);
  }

}
