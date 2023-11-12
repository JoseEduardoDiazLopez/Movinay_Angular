import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Citas } from 'src/app/models/citas';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-validar-cita',
  templateUrl: './validar-cita.component.html',
  styleUrls: ['./validar-cita.component.css']
})
export class ValidarCitaComponent {
  idCita: string;

  constructor(private route: ActivatedRoute, private citasService: CitasService, private toast:ToastrService, private router:Router) {
    this.idCita = ''; // Inicializa el idCita

    this.route.params.subscribe(params => {
      this.idCita = this.route.snapshot.paramMap.get('id')!;
    });
  }

  validarCita() {
    if (this.idCita) {
      this.citasService.actualizarEstadoCita(this.idCita, 'Validado')
        .subscribe(response => {
          console.log('Cita validada:', response);
          this.toast.success('Se valido la cita');
          this.router.navigate(['/mi-cuenta']);
          // Aquí podrías realizar alguna acción adicional después de validar la cita si es necesario
        }, error => {
          console.error('Error al validar la cita:', error);
          // Manejar errores aquí
        });
    } else {
      console.error('No se ha proporcionado un ID de cita válido.');
    }
  }

  rechazarCita() {
    if (this.idCita) {
      this.citasService.actualizarEstadoCita(this.idCita, 'Rechazado')
        .subscribe(response => {
          console.log('Cita rechazada:', response);
          this.toast.error('Se rechazo la cita');
          this.router.navigate(['/mi-cuenta']);
          // Acciones posteriores al rechazo de la cita, si es necesario
        }, error => {
          console.error('Error al rechazar la cita:', error);
          // Manejar errores aquí
        });
    } else {
      console.error('No se ha proporcionado un ID de cita válido.');
    }
  }
}
