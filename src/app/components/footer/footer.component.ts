import { Component, OnInit } from '@angular/core';
import { obtenerNombreAleatorio } from '../../service/copy-programer.service'; // Importar la función desde service.ts

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number;
  nombreAleatorio: string = ''; // Inicializar la propiedad con un valor predeterminado

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.nombreAleatorio = obtenerNombreAleatorio(); // Asignar un nombre aleatorio al inicializar el componente
  }

}
