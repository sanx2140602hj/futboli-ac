/* import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Puedes agregar lógica específica de la barra de navegación aquí si es necesario

  constructor(private router: Router) {
    // Detección de cambio de ruta para cualquier lógica adicional si es necesario
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Puedes agregar lógica específica cuando cambia la ruta
      }
    });
  }
}
