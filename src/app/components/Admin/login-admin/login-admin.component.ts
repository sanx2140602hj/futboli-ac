import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/authService.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(response => {
        // Manejar la respuesta de la API aquí
        console.log(response);
        // Redirigir a la página de inicio después del inicio de sesión exitoso
        this.router.navigate(['/Inicio']);
      }, error => {
        // Manejar errores aquí
        console.error(error);
        this.errorMessage = 'Correo electrónico o contraseña incorrectos';
      });
  }
}
