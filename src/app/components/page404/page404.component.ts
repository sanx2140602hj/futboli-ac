import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  frases: string[] = [
    "¡Fuera de juego! Parece que te has desviado del camino.",
    "¡Tiro de esquina! Pero no encontramos la página...",
    "Oh vaya, esto es una falta... ¡Tarjeta roja! No deberías estar aquí.",
    "¡Gol fantasma! Esta página no está en el marcador.",
    "¡Fuera de los límites! Mejor regresemos al campo de juego.",
    "El árbitro ha pitado... esta página no está en juego.",
    "¡Fuera de banda! Nos salimos del terreno de juego.",
    "Tiempo extra... pero la página sigue sin aparecer.",
    "¡Autogol! Esta página no era la que buscabas."
  ];

  fraseSeleccionada: string = '';

  constructor() { }

  ngOnInit(): void {
    this.fraseSeleccionada = this.obtenerFraseAleatoria();
  }

  obtenerFraseAleatoria(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.frases.length);
    return this.frases[indiceAleatorio];
  }
}
