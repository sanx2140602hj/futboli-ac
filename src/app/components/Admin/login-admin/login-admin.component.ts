import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/authService.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  user: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.user, this.password)
      .subscribe(isAuthenticated => {
        if (isAuthenticated) {
          // Establecer isLoggedIn a true si el inicio de sesión es exitoso
          this.isLoggedIn = true;
          // Redirigir a la página de inicio después del inicio de sesión exitoso
          this.router.navigate(['/Admin-Home']);
        } else {
          // Mostrar mensaje de error si las credenciales son inválidas
          this.errorMessage = 'Correo electrónico o contraseña incorrectos';
        }
      }, error => {
        // Manejar errores aquí
        console.error(error);
        this.errorMessage = 'Se produjo un error al iniciar sesión';
      });
  }
}
