import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSVG = true; // Variable para controlar la visibilidad del SVG

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event']) // Listener para el evento de desplazamiento
  onScroll(event: Event): void {
    const scrollPosition = window.pageYOffset; // Obtener la posición vertical del scroll
    // Cambiar la visibilidad del SVG cuando se alcance una cierta posición de desplazamiento
    this.showSVG = scrollPosition < 200; // Puedes ajustar el valor '200' según la posición en la que quieras ocultar el SVG
  }

  shouldShowAppComponent(): boolean {
    // Obtener la ruta actual
    const currentRoute = this.router.url;

    // Determinar si se debe mostrar el AppComponent basado en la ruta
    // Por ejemplo, ocultar en la ruta 'Admin'
    return !currentRoute.includes('Admin');
  }
}
