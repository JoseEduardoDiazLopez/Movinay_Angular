import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  guardarId!: number;
  listarUsuario: User[] = [];
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.guardarId = this.authService.getUserId();
    this.obtenerPerfil();
  }
  obtenerPerfil() {
    this.authService.consultarPerfil(this.guardarId).subscribe((data: User[] | User) => {
      console.log(data);
  
      // Si es un solo objeto, conviértelo en un array para que ngFor funcione
      if (!Array.isArray(data)) {
        data = [data];
      }
  
      this.listarUsuario = data;
    }, (error: any) => {
      console.log(error);
    });
  }
  
}
