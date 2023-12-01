import { Component } from '@angular/core';

@Component({
  selector: 'app-pago-ep',
  templateUrl: './pago-ep.component.html',
  styleUrls: ['./pago-ep.component.css','./pago-et.component.css','./pago-ee.component.css']
})
export class PagoEpComponent {

  mostrarHeader(opcionSeleccionada: string): void {
    console.log('Función mostrarHeader está siendo llamada con:', opcionSeleccionada);

    const formPagoSeleccion: HTMLElement | null = document.getElementById('formPagoSeleccion');
    const formPagoTarjeta: HTMLElement | null = document.getElementById('formPagoTarjeta');
    const formPagoEfectivo: HTMLElement | null = document.getElementById('formPagoEfectivo');
    
    if (opcionSeleccionada === 'formPagoTarjeta') {
      if (formPagoSeleccion) formPagoSeleccion.style.display = 'none';
      if (formPagoTarjeta) formPagoTarjeta.style.display = 'block';
      if (formPagoEfectivo) formPagoEfectivo.style.display = 'none';
    } else if (opcionSeleccionada === 'formPagoEfectivo') {
      if (formPagoSeleccion) formPagoSeleccion.style.display = 'none';
      if (formPagoEfectivo) formPagoEfectivo.style.display = 'block';
      if (formPagoTarjeta) formPagoTarjeta.style.display = 'none';
    }
  }
}
