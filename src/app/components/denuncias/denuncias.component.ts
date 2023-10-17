import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Denuncias } from 'src/app/models/denuncias';
import { DenunciasService } from 'src/app/services/denuncias.service';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css']
})
export class DenunciasComponent {
  listarDenuncias: Denuncias[] = [];
  constructor (private _DenunciasService: DenunciasService, private toastr: ToastrService){}
  ngOnInit(): void{
    this.obtenerDenuncias();
  }
  obtenerDenuncias(){
    this._DenunciasService.getDenuncia().subscribe(data => {
      console.log(data);
      this.listarDenuncias = data;
    }, error=>{
      console.log(error);
    });
  }// obtenerDenuncias
}
