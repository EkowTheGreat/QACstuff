import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';
import {Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public form: FormGroup
  public list;

  constructor(
    private toServe: TodoService,
    private router: Router,
    private aroute: ActivatedRoute,
  ) {
    this.form = new FormGroup({
      title: new FormControl('title',Validators.required),
      text: new FormControl('',[Validators.required,Validators.minLength(8)]),
    })

   }

  ngOnInit() {

    //console.log(this.toServe.getAll().subscribe())
    const id = decodeURIComponent(this.aroute.snapshot.params.id);
    this.toServe.getbyid(id).subscribe( m =>
        
        
      this.form.patchValue(m),
      
      err =>{
        console.log(err);
      }
      
      
    )
  
    
  }
  updateOrders(){
    const id = decodeURIComponent(this.aroute.snapshot.params.id);
    console.log("Roger Roger");
    if(this.form.valid)
    {
      console.log("we got'em");
      console.log(this.form.value);
    this.toServe.updateOrder(id,this.form.value).subscribe( ()=>{
      
       this.router.navigate(['/'])
    },err =>{
      console.log(err);
      
    }
     
    ) ;
  }

  }
}


