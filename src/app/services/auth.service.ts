import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL1='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/autenticacion/register';
  URL2='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/autenticacion/login';
  constructor(private http: HttpClient) { }
  register(user: User): Observable<any> {
    return this.http.post(this.URL1, user);
  }

  login(user: User): Observable<any>{
    return this.http.post(this.URL2, user);
  }
}
