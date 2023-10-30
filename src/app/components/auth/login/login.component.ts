import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerUserr: User = new User('',''); // Initialize an empty User object for registration
  loginUserr: User = new User('','');    // Initialize an empty User object for login
  idUsuario : number | undefined;
  resetFields() {
    this.registerUserr = {
      username: '',
      password: ''
    };
  
    this.loginUserr = {
      username: '',
      password: ''
    };
  }
  constructor(private authService: AuthService,private toastr: ToastrService,private router: Router) { }

  registerUser() {
    this.authService.register(this.registerUserr).subscribe(
      (response) => {
        console.log('Registration successful', response);
        this.toastr.info('Registro con éxito','¡Atención!',);
      },
      (error) => {
        console.error('Registration error', error);
      }
    );
  }

  loginUser() {
    this.authService.login(this.loginUserr).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.toastr.info('Sesion con éxito','¡Atención!',);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login error', error);
        this.toastr.info('Error al iniciar sesión','¡Atención!',);
      }
    );
  }
}
