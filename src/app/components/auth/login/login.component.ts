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
  registerUserr: User = new User("","","","","","","",""); // Initialize an empty User object for registration
  loginUserr: User = new User("","","","","","","","");    // Initialize an empty User object for login
  resetFields() {
    this.registerUserr = {
      username: '',
      password: '',
      email: '',
      RFC: '',
      nombre: '',
      ApellidoPaterno: '',
      ApellidoMaterno: '',
      FechaNac : ''
    };
  
    this.loginUserr = {
      username: '',
      password: '',
      email: '',
      RFC: '',
      nombre: '',
      ApellidoPaterno: '',
      ApellidoMaterno: '',
      FechaNac : ''
    };
  }
  constructor(private authService: AuthService,private toastr: ToastrService,private router: Router) { }
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
