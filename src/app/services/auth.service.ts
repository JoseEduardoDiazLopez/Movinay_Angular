import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL1='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/autenticacion/register';
  URL2='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/autenticacion/login';

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  register(user: User): Observable<any> {
    return this.http.post(this.URL1, user).pipe(
      map((response: any) => {
        const loggedInUser: User = response.user;
        this.currentUserSubject.next(loggedInUser);
        return loggedInUser;

      })
    );
  }
  
  login(user: User): Observable<any> {
    return this.http.post(this.URL2, user).pipe(
      map((response: any) => {
        const loggedInUser: User = response.user;
        this.currentUserSubject.next(loggedInUser);
        return loggedInUser;
      })
    );
  }
  
  

  logout() {
    this.currentUserSubject.next(null);
    this.toastr.warning('Se cerro la sesión.');
  }
  
}
