import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerUserr: User = new User('',''); // Initialize an empty User object for registration
  loginUserr: User = new User('','');    // Initialize an empty User object for login
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
        this.toastr.info('Registro con éxito. Inicie sesión de nuevo para guardar cambios.','¡Atención!',);
        this.resetFields();
        this.authService.logout();
        this.router.navigate(['/sesion']);
      },
      (error) => {
        console.error('Registration error', error);
        this.toastr.info('Hubo un error al registrar.','¡Atención!',);
        this.resetFields();
      }
    );
  }
}
