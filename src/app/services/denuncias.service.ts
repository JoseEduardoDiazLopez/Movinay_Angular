import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Denuncias } from '../models/denuncias';


@Injectable({
  providedIn: 'root'
})
export class DenunciasService {
  URL='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/denuncias/';
  constructor(private http: HttpClient) { }
  getDenuncia(): Observable<any>{
    return this.http.get(this.URL);
  }
  eliminarDenuncia(id: string): Observable<any>{
    return this.http.delete(this.URL + id);
  }
  guardarDenuncia(exper: Denuncias): Observable<any>{
    return this.http.post(this.URL, exper);
  }
  obtenerDenuncia(id: string): Observable<any>{
    return this.http.get(this.URL + id);
  }
  editarDenuncia(id: string, exper: Denuncias): Observable<any>{
    return this.http.put(this.URL+id, exper);
  }
  consultarDenuncia(nombre: string): Observable<any>{
    return this.http.get(this.URL + nombre);
  }
}
