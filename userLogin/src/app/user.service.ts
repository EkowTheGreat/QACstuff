import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(userData): Observable<any>{
    return this.http.get('https://us-central1-qac-sandbox-531db.cloudfunctions.net/login',{params: userData});

  }
}
