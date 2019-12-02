import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule
  ],
  exports: [LoginComponent]

})
export class UserModule { LoginComponent}
