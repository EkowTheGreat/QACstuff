import { Component } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 

export class AppComponent {
  title = 'y';
  inputVal='start '
  location = {
    Place:'Mars',
  Time: 3200,
  x:50,
  y:3,
  testArray:["ff","gg","cc"],
  
  }


  onKeyDown(event){
    this.inputVal = event.target.value;
    console.log(this.inputVal);

  }
  onButtonClicked(){
    console.log('click');
  }
  

}
