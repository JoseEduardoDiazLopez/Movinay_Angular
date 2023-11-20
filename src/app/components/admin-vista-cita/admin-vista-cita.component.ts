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
  selectedFile: File | null = null;

  constructor (private _CitasService: CitasService,private aRouter: ActivatedRoute, private _authService: AuthService){
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
    console.log(this.id);
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
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }
  subirImagen(): void {
    if (this.selectedFile) {
      this._authService.subirImagen(this.id, this.selectedFile).subscribe(
        (response) => {
          console.log('Imagen subida con éxito', response);
        },
        (error) => {
          console.error('Error al subir la imagen', error);
        }
      );
    }
  }

  obtenerImagen(): void {
    this._authService.obtenerImagen(this.id).subscribe(
      (imagen) => {
        console.log('Imagen obtenida:', imagen);
        // Puedes mostrar la imagen en el componente HTML aquí
      },
      (error) => {
        console.error('Error al obtener la imagen', error);
      }
    );
  }
}
