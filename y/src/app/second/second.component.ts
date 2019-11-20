import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() comment: string;
  @Output() buttonClicked =new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  handleButtonClicked(){
    this.buttonClicked.emit("what?")

}
}
