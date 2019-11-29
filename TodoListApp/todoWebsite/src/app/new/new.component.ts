import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public form: FormGroup;

  constructor(private router: Router, private toServe: TodoService) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required ,Validators.minLength(5)]),
      text: new FormControl('', [Validators.required ,Validators.minLength(10)])
    });
   }

  ngOnInit() {
  }
  sendOrders() {
    console.log('Roger Roger');
    if (this.form.valid){
    this.toServe.newOrder(this.form.value).subscribe( ()=>{
      console.log(this.form.value)
       this.router.navigate(['/'])
    },err =>{
      console.log(err);
      
    }
     
    ) ;
  }

  }
}
