import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {
     path: 'new',
    component: NewComponent
  },
  {
    path: '',
   component: HomeComponent
 },
 {
  path: 'view/:id',
 component: ViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
