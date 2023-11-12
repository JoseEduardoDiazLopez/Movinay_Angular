import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Citas } from 'src/app/models/citas';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-admin-vista-cita',
  templateUrl: './admin-vista-cita.component.html',
  styleUrls: ['./admin-vista-cita.component.css']
})
export class AdminVistaCitaComponent {
  listarCitas: Citas[] = [];
  id: string;
  constructor (private _CitasService: CitasService,private aRouter: ActivatedRoute){
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }
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
}
