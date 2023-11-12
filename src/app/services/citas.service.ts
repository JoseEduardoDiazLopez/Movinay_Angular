import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citas } from '../models/citas'
@Injectable({
  providedIn: 'root'
})
export class CitasService {
  URL='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/citas/';
  //URL='http://localhost:3000/api/citas/'
  constructor(private http: HttpClient) { }
  getCitas(): Observable<any>{
    return this.http.get(this.URL);
  }
  eliminarCitas(id: string): Observable<any>{
    return this.http.delete(this.URL + id);
  }
  guardarCitas(exper: Citas): Observable<any>{
    return this.http.post(this.URL, exper);
  }
  obtenerCitas(id: string): Observable<any>{
    return this.http.get(this.URL + id);
  }
  editarCitas(id: string, exper: Citas): Observable<any>{
    return this.http.put(this.URL+id, exper);
  }
  consultarCitas(nombre: number): Observable<any>{
    return this.http.get(this.URL + nombre);
  }
  obtenerCitaPorId(id: string): Observable<Citas> {
    return this.http.get<Citas>(this.URL + id);
  }
  actualizarEstadoCita(id: string, estado: string): Observable<any> {
    return this.http.put(`${this.URL}${id}/validar`, { EstadoCita: estado });
  }
}
