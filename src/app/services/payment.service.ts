import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
   URL='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/payment/idUsuario/';
   URLApi='https://movinaybackend-dev-zfap.2.ie-1.fl0.io/api/payment';
  //URL='http://localhost:3000/api/payment/idUsuario/'
  //URLApi = "http://localhost:3000/api/payment";
  constructor(private http: HttpClient) { }
  getTiposTramite(idUsuario: number): Observable<string[]> {
    return this.http.get<any>(`${this.URL}${idUsuario}`)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud al servidor:', error);
          return throwError('Error al obtener tipos de trámite.');
        }),
        map(response => {
          // Verificar si la propiedad 'tiposTramite' existe y es un array
          if (response.tiposTramite && Array.isArray(response.tiposTramite)) {
            return response.tiposTramite;
          } else {
            console.error('La respuesta del servidor no tiene la estructura esperada:', response);
            throw new Error('Respuesta del servidor no válida.');
          }
        }),
        catchError(error => {
          console.error('Error al procesar la respuesta del servidor:', error);
          return throwError('Error al obtener tipos de trámite.');
        })
      );
  }
  completarInformacionPago(idUsuario: number, pagoData: any): Observable<any> {
    const url = `${this.URLApi}/finish-payment/${idUsuario}`;
    return this.http.put(url, pagoData);
  }
}
