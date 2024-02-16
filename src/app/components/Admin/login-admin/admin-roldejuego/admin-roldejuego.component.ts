import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-roldejuego',
  templateUrl: './admin-roldejuego.component.html',
  styleUrls: ['./admin-roldejuego.component.css']
})
export class AdminRoldejuegoComponent implements OnInit {
  nombreTorneo: string = ''; // 🦖 Declara una variable para almacenar el nombre del torneo y la inicializa como una cadena vacía
  categoriaParticipar: string = ''; // 🦖 Declara una variable para almacenar la categoría a participar y la inicializa como una cadena vacía
  fechas: string = ''; // 🦖 Declara una variable para almacenar las fechas y la inicializa como una cadena vacía
  nombreTorneoInvalid: boolean = false; // 🦖 Declara una variable para indicar si el nombre del torneo es inválido y la inicializa como falsa
  categoriaParticiparInvalid: boolean = false; // 🦖 Declara una variable para indicar si la categoría a participar es inválida y la inicializa como falsa
  fechasInvalid: boolean = false; // 🦖 Declara una variable para indicar si las fechas son inválidas y la inicializa como falsa
  touchedNombre: boolean = false; // 🦖 Declara una variable para indicar si se ha tocado el campo de nombre del torneo y la inicializa como falsa
  touchedCategoria: boolean = false; // 🦖 Declara una variable para indicar si se ha tocado el campo de categoría a participar y la inicializa como falsa
  touchedFechas: boolean = false; // 🦖 Declara una variable para indicar si se ha tocado el campo de fechas y la inicializa como falsa
 
 
 /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */
 equiposDisponibles: string[] = ['Equipo A', 'Equipo B', 'Equipo C', 'Equipo D', 'Equipo E', 'Equipo F', 'Equipo G']; // 🦖 Declara una variable para almacenar los equipos disponibles para agregar y la inicializa con una lista de equipos
 /* aqui arriba ⬆️⬆️⬆️ hacer la conexcion a basew de datos para traer los nombres de los equipos*/
 /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */
 
 
 
 
  equiposSeleccionados: string[] = []; // 🦖 Declara una variable para almacenar los equipos seleccionados para participar y la inicializa como una lista vacía
  equiposInvalid: boolean = false; // 🦖 Declara una variable para indicar si los equipos seleccionados son inválidos y la inicializa como falsa

  constructor() { }

  ngOnInit(): void {
    // 🦖 Método del ciclo de vida de Angular que se ejecuta después de que Angular ha inicializado todas las propiedades del componente
  }

  validarYGuardarDatos(): void {
    // 🦖 Método para validar los datos antes de guardarlos
    // Activar la bandera de "touched" para mostrar mensajes de error
    this.touchedNombre = true;
    this.touchedCategoria = true;
    this.touchedFechas = true;

    // Validar si todos los campos están llenos
    this.validateNombre();
    this.validateCategoria();
    this.validateFechas();

    // Validar si hay al menos un equipo seleccionado
    this.equiposInvalid = this.equiposSeleccionados.length === 0;

    // Si hay algún campo inválido o no hay equipos seleccionados, detener el proceso
    if (this.nombreTorneoInvalid || this.categoriaParticiparInvalid || this.fechasInvalid || this.equiposInvalid) {
      return;
    }

    // Si todos los campos están llenos y hay al menos un equipo seleccionado, guardar los datos
    this.guardarDatos();
  }

  guardarDatos(): void {
    // 🦖 Método para guardar los datos
    if (this.nombreTorneo && this.categoriaParticipar && this.fechas) {
      if (this.equiposSeleccionados.length > 0) {
        const datos = {
          nombreTorneo: this.nombreTorneo,
          categoriaParticipar: this.categoriaParticipar,
          fechas: this.fechas,
          equiposSeleccionados: this.equiposSeleccionados // Incluir equipos seleccionados en los datos guardados
        };

 /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */
 /* Aqui recopila los datos ya almacenados por lo que aqui se exportara a la base de datos */
        console.log('Datos guardados:', datos);
        console.log('Equipos seleccionados:', this.equiposSeleccionados); // Imprimir equipos seleccionados
 /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */


        //Una vez guardado y "almacenado" el codigo se limpia para que el usario no registre dobles
        this.limpiarInputs();
      } else {
        this.equiposInvalid = true;
      }
    } else {
      console.log('Todos los campos son requeridos');
    }
  }

  limpiarInputs(): void {
    // 🦖 Método para limpiar los campos de entrada
    // Resetear los valores de los campos
    this.nombreTorneo = '';
    this.categoriaParticipar = '';
    this.fechas = '';

    // Resetear los equipos seleccionados
    this.equiposSeleccionados = [];

    console.log('Limpió');
  }

  agregarEquipo(equipo: string): void {
    // 🦖 Método para agregar un equipo a la lista de equipos seleccionados
    // Agregar equipo a la lista de equipos seleccionados
    this.equiposSeleccionados.push(equipo);
    // Eliminar equipo de la lista de equipos disponibles
    this.equiposDisponibles = this.equiposDisponibles.filter(e => e !== equipo);
  }

  eliminarEquipo(equipo: string): void {
    // 🦖 Método para eliminar un equipo de la lista de equipos seleccionados
    // Eliminar equipo de la lista de equipos seleccionados
    this.equiposSeleccionados = this.equiposSeleccionados.filter(e => e !== equipo);
    // Agregar equipo a la lista de equipos disponibles
    this.equiposDisponibles.push(equipo);
  }

  // Funciones para marcar los campos como tocados
  markNombreAsTouched(): void {
    // 🦖 Método para marcar el campo de nombre del torneo como tocado
    this.touchedNombre = true;
  }

  markCategoriaAsTouched(): void {
    // 🦖 Método para marcar el campo de categoría a participar como tocado
    this.touchedCategoria = true;
  }

  markFechasAsTouched(): void {
    // 🦖 Método para marcar el campo de fechas como tocado
    this.touchedFechas = true;
  }

  // Funciones para validar los campos
  isValidNombreTorneo(): boolean {
    // 🦖 Método para validar si el nombre del torneo es válido
    const pattern = /^[a-zA-Z0-9\s]*$/;
    return pattern.test(this.nombreTorneo);
  }

  validateNombre(): void {
    // 🦖 Método para validar el campo de nombre del torneo
    this.nombreTorneoInvalid = !this.nombreTorneo || !this.isValidNombreTorneo();
  }

  validateCategoria(): void {
    // 🦖 Método para validar el campo de categoría a participar
    this.categoriaParticiparInvalid = !this.categoriaParticipar && this.touchedCategoria;
  }

  validateFechas(): void {
    // 🦖 Método para validar el campo de fechas
    this.fechasInvalid = !this.fechas && this.touchedFechas;
  }
  
}
