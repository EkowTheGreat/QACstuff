import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8080/getall');
  }
  getbyid(id) {
    return this.http.get('http://localhost:8080/getbyid/' + id);
  }
  newOrder(body) {
    return this.http.post('http://localhost:8080/new', body);
  }
  updateOrder(id, body) {
    return this.http.put('http://localhost:8080/update/' + id, body);

  }
  deleteOrder(id) {
    return this.http.delete('http://localhost:8080/delete/' + id);
  }
}
