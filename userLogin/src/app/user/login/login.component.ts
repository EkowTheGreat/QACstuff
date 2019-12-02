import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public form: FormGroup


  constructor(
      private userve: UserService,
    private router: Router
  ) { 
    this.form = new FormGroup({
      username: new FormControl('usedNane',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    })
  }

  ngOnInit() {
    // this.form.valueChanges.subscribe(data => {
    //   console.log('CHANGE:',data)});
    this.form.valueChanges.subscribe(() => {
      console.log('CHANGE:',this.form.valid )});
  }
  handleSubmit(){
    if(this.form.valid)
    {
      console.log("we got'em");
    console.log(this.form.value);
    this.userve.login(this.form.value).subscribe( ()=>{
       this.router.navigate(['/home'])
    },err =>{
      console.log(err);
      
    }
     
    ) ;
    }
    
  }

}
