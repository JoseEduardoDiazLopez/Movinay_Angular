import { Component } from '@angular/core';
import { Citas } from '../models/citas';
import { CitasService } from '../services/citas.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabActiva: number = 0;


  mostrarContenido(index: number) {
    this.tabActiva = index;
  }
   listarCitas: Citas[] = [];
  constructor (private _CitasService: CitasService, private toastr: ToastrService){}
  ngOnInit(): void{
    this.obtenerCitas();
  }
  obtenerCitas(){
    this._CitasService.getCitas().subscribe((data: Citas[]) => {
      console.log(data);
      this.listarCitas = data;
    }, (error: any)=>{
      console.log(error);
    });
  }// obtener cita

  CrearCita(){
    const moduloCita = (document.getElementById('cmbxModulo') as HTMLSelectElement)?.value;
    const fecha = (document.getElementsByName('fecha')[0] as HTMLInputElement)?.value;
    const horaCita = (document.getElementById('cmbxHora') as HTMLSelectElement)?.value;
    const tipoTramite = (document.getElementById('cmbxTramite') as HTMLSelectElement)?.value;

    const CITAS: Citas = {
     
    idCita : 1,
    Fecha :fecha,
    Hora :horaCita,
    numTramite :tipoTramite,
    idUsuario : 1,
    idOficina : 1 
    }
   
      console.log(CITAS);
      this._CitasService.guardarCitas(CITAS).subscribe(data =>{
        this.toastr.info('Se ha añadido una nueva cita','¡cita añadida!',);
       
      }, error =>{
        console.log(error);
    
      })
  }// crear cita
  
}

