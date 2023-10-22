import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  currentUser!: User | null;
  constructor(private authService: AuthService) {}
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
   // Verifica si el usuario está logueado
   userIsLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  // Cierra la sesión del usuario
  logout() {
    this.authService.logout(); // Asegúrate de que AuthService tenga un método logout
  }

  ngOnInit() {
    this.authService.currentUser.subscribe((user: User | null) => {
      this.currentUser = user;
    });
  }
}
