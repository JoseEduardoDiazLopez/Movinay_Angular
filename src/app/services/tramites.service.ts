import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TramitesService {
   URL='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/tramites';
   URL2='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/tramites/costo';
  //URL='http://localhost:3000/api/tramites'
  //URL2='http://localhost:3000/api/tramites/costo/'
  constructor(private http: HttpClient) { }
  getTramites(): Observable<any>{
    return this.http.get(this.URL);
  }
  getCostoTramite(tramite: string): Observable<any>{
    return this.http.get(`${this.URL2}${tramite}`);
  }
}
