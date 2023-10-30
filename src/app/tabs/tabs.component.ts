import { Component, OnInit } from '@angular/core';
import { Citas } from '../models/citas';
import { CitasService } from '../services/citas.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabActiva: number = 0;
  tabsForm: FormGroup;
  titulo = 'Añadir denuncia'
  id: string;
  guardarId : number | undefined;

  mostrarContenido(index: number) {
    this.tabActiva = index;
  }
   listarCitas: Citas[] = [];
  constructor (private _CitasService: CitasService, private toastr: ToastrService,private fb: FormBuilder,private router: Router, private aRouter: ActivatedRoute,
    private authService: AuthService){
    this.tabsForm = this.fb.group({
      idCita:['', Validators.required],
      Fecha:['', Validators.required],
      Hora:['', Validators.required], 
      Modulo :['', Validators.required],
      TipoTramite: ['', Validators.required],
      idUsuario: ['', Validators.required],
      idOficina:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void{
    this.obtenerCitas();
    this.guardarId = this.authService.getUserId();
    this.tabsForm.get('idUsuario')?.setValue(this.guardarId);
  }
  obtenerCitas(){
    this._CitasService.getCitas().subscribe((data: Citas[]) => {
      console.log(data);
      this.listarCitas = data;
    }, (error: any)=>{
      console.log(error);
    });
  }// obtener cita
  editarCitas(){

  }
  agregarCita(){
    const CITAS : Citas = {
      idCita: this.tabsForm.get('idCita')?.value,
      Fecha: this.tabsForm.get('Fecha')?.value,
      Hora: this.tabsForm.get('Hora')?.value,
      Modulo: this.tabsForm.get('Modulo')?.value,
      TipoTramite: this.tabsForm.get('TipoTramite')?.value,
      idUsuario: this.tabsForm.get('idUsuario')?.value,
      idOficina: this.tabsForm.get('idOficina')?.value
    }
    if(this.id !== null){
      this._CitasService.editarCitas(this.id, CITAS).subscribe(data =>{
        this.toastr.info('Se actualizó la cita.','Cita actualizada!');
        this.router.navigate(['/new-cita']);
        this.tabsForm.reset();
      }, error => {
          console.log(error);
          this.tabsForm.reset();
      }
      )
    }else{
      console.log(this.tabsForm);
      console.log(CITAS);
      this._CitasService.guardarCitas(CITAS).subscribe(data =>{
        this.toastr.success('Se inserto una nueva cita..','Cita insertada!');
        this.router.navigate(['/new-cita']);
        this.tabsForm.reset();
        this.obtenerCitas();
      }, error=>{
        console.log(error);
        this.tabsForm.reset();
      })
    }//if
  }// agregarDenuncia
  
}// class tab

