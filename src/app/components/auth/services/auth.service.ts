import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient) {}

  register(user: UserI): Observable<JwtResponseI> {
    return this.httpClient
      .post<JwtResponseI>(`${this.AUTH_SERVER}/register`, user)
      .pipe(
        tap((res: JwtResponseI) => {
          if (res) {
            // guardar token
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient
      .post<JwtResponseI>(`${this.AUTH_SERVER}/login`, user)
      .pipe(
        tap((res: JwtResponseI) => {
          if (res) {
            // guardar token
          }
        })
      );
  }

}
