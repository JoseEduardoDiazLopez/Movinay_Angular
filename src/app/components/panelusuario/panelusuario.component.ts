import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-panelusuario',
  templateUrl: './panelusuario.component.html',
  styleUrls: ['./panelusuario.component.css']
})
export class PanelusuarioComponent {
  today: Date = new Date();
  currentComponent: string = 'citas'; // Componente inicial
  currentUser: User | null = null;
  currentUserName: string = '';
  guardarUsuario : string = '';
  guardarId : number | undefined;
  constructor(private authService: AuthService,private router: Router){}
  showComponent(component: string) {
    this.currentComponent = component;
  }
   // Verifica si el usuario está logueado
   userIsLoggedIn(): boolean {
    return this.currentUser !== null; 
  }
  guardarUser() : string{
    return this.guardarUsuario
  }
  ngOnInit() {
    this.authService.currentUser.subscribe((user: User | null) => {
      this.currentUser = user;
      this.currentUserName = user ? user.username : '';
      this.guardarUsuario= this.authService.usuarioCad
      this.guardarId = this.authService.getUserId();
    });
  }
}
