import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utils-roldejuego',
  templateUrl: './utils-roldejuego.component.html',
  styleUrls: ['./utils-roldejuego.component.css']
})
export class UtilsRoldejuegoComponent implements OnInit {
  equipos: string[] = ['Equipo 1', 'Equipo 2']; // Variable para almacenar los nombres de los equipos
  cantidadSelects: number = 5; // Variable para definir la cantidad de selects a generar
  temporadas: string[] = ['Temporada 1', 'Temporada 2', 'Temporada 3', 'Temporada 4']; // Variable para almacenar las temporadas
  equipoTables: string[] = ['Mexico', 'EEUU', 'España', 'Italia']; // Variable para almacenar los nombres de los equipos en la tabla

  constructor() { }

  ngOnInit(): void {
  }

}
