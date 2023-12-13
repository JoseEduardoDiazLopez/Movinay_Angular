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
  /*
  URL1='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/autenticacion/register';
  URL2='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/autenticacion/login';
  URL3='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/autenticacion/'*/

  URL1='http://localhost:3000/api/autenticacion/register';
 URL2='http://localhost:3000/api/autenticacion/login';
 URL3='http://localhost:3000/api/autenticacion';
  public currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();
  public usuarioCad : string = '';
  public userId!: number;
  constructor(private http: HttpClient,private toastr: ToastrService) { }
  
  setUserId(id: number) {
    this.userId = id;
  }

  getUserId() {
    console.log(this.userId)
    return this.userId;
  }
  register(user: User): Observable<any> {
    return this.http.post(this.URL1, user).pipe(
      map((response: any) => {
        const loggedInUser: User = response.user;
        this.currentUserSubject.next(loggedInUser);
        const userId = response.userId;
        this.setUserId(userId);
        this.usuarioCad = user.username;
        return loggedInUser;
      })
    );
  }
  
  login(user: User): Observable<any> {
    return this.http.post(this.URL2, user).pipe(
      map((response: any) => {
        const loggedInUser: User = response.user;
        this.currentUserSubject.next(loggedInUser);
        const userId = response.userId;
        this.setUserId(userId);
        this.usuarioCad = user.username;
        return loggedInUser;
      })
    );
  }
  
  logout() {
    this.currentUserSubject.next(null);
    this.toastr.warning('Se cerro la sesión.');
  }
  subirImagen(userId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file, file.name);

    return this.http.post(`${this.URL3}/${userId}/uploadImage`, formData);
  }

  obtenerImagen(userId: string): Observable<User> {
    return this.http.get<User>(`${this.URL3}/${userId}/getImage`);
  }
  consultarPerfil(id: number): Observable<any>{
    return this.http.get(`${this.URL3}/perfil/${id}`);
  }
}
