import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-jugadores',
  templateUrl: './admin-jugadores.component.html',
  styleUrls: ['./admin-jugadores.component.css']
})
export class AdminJugadoresComponent implements OnInit {
  jugadores = [
    { id: 1, nombre: 'deadpool' },
    { id: 2, nombre: '2' },
    { id: 3, nombre: '3' },
    { id: 4, nombre: '4' },
    { id: 5, nombre: '5' },
    { id: 6, nombre: '6' },

    // Puedes agregar más jugadores aquí si lo deseas
  ];
  nuevoJugadorNombre: string = '';
  searchTerm: string = ''; // Agrega la propiedad searchTerm aquí

  constructor() { }

  ngOnInit(): void {
  }

  agregarJugador() {
    if (this.nuevoJugadorNombre.trim() !== '') {
      this.jugadores.push({ id: this.jugadores.length + 1, nombre: this.nuevoJugadorNombre });
      this.nuevoJugadorNombre = ''; // Limpiar el campo después de agregar un jugador
    }
  }

}
