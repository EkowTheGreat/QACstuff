import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public form: FormGroup;
  public list;
  public title = '1';

  constructor(private router: Router, private toServe: TodoService) {
    this.form = new FormGroup({
      title: new FormControl('title', Validators.required),
      text: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.toServe.getAll().subscribe(
      m => this.list = m,
      err => console.log(err));
  }

  toView(id: number) {
    console.log(id);
    this.router.navigate(['view', id]);
  }

  newOrder() {
    this.router.navigate(['new']);
  }
  deleteById(id) {
    this.toServe.deleteOrder(id).subscribe(() => {
      this.fetchItems();
    }, err => {
      console.log(err);

    }

    );
  }

}
