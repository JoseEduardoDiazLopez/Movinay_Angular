import { FetchBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Footer } from 'primeng/api';
import { Denuncias } from 'src/app/models/denuncias';
import { DenunciasService } from 'src/app/services/denuncias.service';

@Component({
  selector: 'app-crear-denuncia',
  templateUrl: './crear-denuncia.component.html',
  styleUrls: ['./crear-denuncia.component.css']
})
export class CrearDenunciaComponent {
  denunciasForm: FormGroup;
  titulo = 'Añadir denuncia'
  id: string;
  constructor(private fb: FormBuilder,private router: Router, private toastr: ToastrService,
    private _denunciaSrvice: DenunciasService, private aRouter: ActivatedRoute){
      this.denunciasForm = this.fb.group({
        idDenuncia:['', Validators.required],
        Fecha:['', Validators.required],
        Descripcion:['', Validators.required], 
        Foto :['', Validators.required],
        Calles: ['', Validators.required],
        Colonia: ['', Validators.required],
        Municipio:['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id')!;
    }

    ngOnOnit(): void{

    }
    editarDenucnia(){
 
    } // editarDenuncia
    agregarDenuncia(){
      const DENUNCIAS: Denuncias = {
        idDenuncia: this.denunciasForm.get('iddenuncia')?.value,
        Fecha: this.denunciasForm.get('fecha')?.value,
        Descripcion:this.denunciasForm.get('Descripcion')?.value,
        Foto : this.denunciasForm.get('Foto')?.value,
        Calles: this.denunciasForm.get('Calles')?.value,
        Colonia: this.denunciasForm.get('Colonia')?.value,
        Municipio: this.denunciasForm.get('Municipio')?.value
      }
      if(this.id !== null){
        this._denunciaSrvice.editarDenuncia(this.id, DENUNCIAS).subscribe(data =>{
          this.toastr.info('Se actualizó la denuncia.','Denuncia actualizada!');
          this.router.navigate(['/denuncias']);
        }, error => {
            console.log(error);
            this.denunciasForm.reset();
        }
        )
      }else{
        console.log(this.denunciasForm);
        console.log(DENUNCIAS);
        this._denunciaSrvice.guardarDenuncia(DENUNCIAS).subscribe(data =>{
          this.toastr.info('Se inserto la denuncia.','Denuncia insertada!');
          this.router.navigate(['/denuncias']);
        }, error=>{
          console.log(error);
          this.denunciasForm.reset();
        })
      }//if
    }// agregarDenuncia
}
