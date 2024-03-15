import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utils-roldejuego',
  templateUrl: './utils-roldejuego.component.html',
  styleUrls: ['./utils-roldejuego.component.css'],
})
export class UtilsRoldejuegoComponent implements OnInit {
  equipos: string[] = ['Equipo 1', 'Equipo 2']; // Variable para almacenar los nombres de los equipos
  cantidadSelects: number = 7; // Variable para definir la cantidad de selects a generar
  temporadas: string[] = [
    'Temporada 1',
    'Temporada 2',
    'Temporada 3',
    'Temporada 4',
  ]; // Variable para almacenar las temporadas
  equipoTables: string[] = ['Mexico', 'EEUU', 'España', 'Italia']; // Variable para almacenar los nombres de los equipos en la tabla

  constructor() {}

  ngOnInit(): void {}

  agregarEquiposClasificados = false;

  // Método para abrir el modal
  openModal() {
    console.log('Modal abierto'); // ⚠️ Se muestra un log en la consola
    this.agregarEquiposClasificados = true; // ⚠️ Se establece en true para mostrar el modal
  }

  // Método para cerrar el modal
  closeModal() {
    console.log('Modal cerrado'); // ⚠️ Se muestra un log en la consola
    this.agregarEquiposClasificados = false; // ⚠️ Se establece en false para ocultar el modal
  }
  /* ------------------------------------------ */
  editarinfoequipos = false;
  infoOpenModal() {
    console.log('Modal cerrado');
    this.editarinfoequipos = true;
  }
  infoCloseModal() {
    console.log('Modal open');
    this.editarinfoequipos = false;
  }
  /* ------------------------------------------ */
  eliminarTorneo = false;
  eliminarTorneOpenModal() {
    console.log('Modal open');
    this.eliminarTorneo = true;
  }
  eliminarTorneCloseModal() {
    console.log('Modal cerrado');
    this.eliminarTorneo = false;
  }
  /* ------------------------------------------ */
}
