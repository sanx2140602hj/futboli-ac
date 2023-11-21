import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  shouldShowAppComponent(): boolean {
    // Obtener la ruta actual
    const currentRoute = this.router.url;

    // Determinar si se debe mostrar el AppComponent basado en la ruta
    // Por ejemplo, ocultar en la ruta 'ADMIN'
    return !currentRoute.includes('Admin');
  }
}
