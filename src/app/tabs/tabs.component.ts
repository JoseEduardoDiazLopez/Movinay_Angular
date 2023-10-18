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
  }// obtenerDenuncias
}
