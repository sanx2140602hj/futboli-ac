  import { Component, OnInit } from '@angular/core';
  import Swal from 'sweetalert2'

  @Component({
    selector: 'app-admin-roldejuego',
    templateUrl: './admin-roldejuego.component.html',
    styleUrls: ['./admin-roldejuego.component.css']
  })
  export class AdminRoldejuegoComponent implements OnInit {

  //para buscar
  searchTerm: string = '';

  /* +++++++++++++++++++++++++++++++++++++++++++++++ */


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
    equiposDisponibles: string[] = ['Equipo A', 'Equipo B', 'Equipo C', 'Equipo D', 'Equipo E', 'Equipo F', 'Equipo G' ,'Equipo 1' ,'Equipo 2' ,'Equipo 3' ,'Equipo 4' ,'Equipo 5' ,'Equipo 6' ,'Equipo 7' ,'Equipo 8' ,'Equipo 9']; // 🦖 Declara una variable para almacenar los equipos disponibles para agregar y la inicializa con una lista de equipos
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
    rolesExistentes: string[] = []; // Variable para almacenar los roles existentes
    //🐢♥️ equiposDisponiblesBackup: string[] = []; // Copia de respaldo de los equipos disponibles
    guardarDatos(): void {
      // 🦖 Método para guardar los datos
      if (this.nombreTorneo && this.categoriaParticipar && this.fechas) {
        if (this.equiposSeleccionados.length > 0) {
          // Agregar el nuevo rol al arreglo de roles existentes
          this.rolesExistentes.push(this.nombreTorneo);

          // Recopilar los datos antes de guardarlos
          const datos = {
            nombreTorneo: this.nombreTorneo,
            categoriaParticipar: this.categoriaParticipar,
            fechas: this.fechas,
            equiposSeleccionados: this.equiposSeleccionados // Incluir equipos seleccionados en los datos guardados
          };
          //Mensaje personalizado
          const mensaje = `Nombre del tornero ${this.nombreTorneo} - `+`Categoria: ${this.categoriaParticipar}`;
          Swal.fire({
            position: "top-end",
            title: 'Generado con exito',
            text: mensaje,
            icon: 'success',
            timer: 2500,
            showConfirmButton: false,

          });


          /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */
          /* Aqui recopila los datos ya almacenados por lo que aqui se exportara a la base de datos */
          console.log('Datos guardados:', datos);
          console.log('Equipos seleccionados:', this.equiposSeleccionados); // Imprimir equipos seleccionados
          /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */
          // Guardar una copia de respaldo de los equipos disponibles
          // 🐢♥️this.equiposDisponiblesBackup = [...this.equiposDisponibles];

          // 🐈‍⬛🐈🌙 En caso de requerir que nuevamente se muestren los equipos des-comentar las lineas que tienen 🐢♥️ al principio 

          /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */
          // Restaurar los equipos disponibles a su estado original
          // 🐢♥️this.equiposDisponibles = ['Equipo A', 'Equipo B', 'Equipo C', 'Equipo D', 'Equipo E', 'Equipo F', 'Equipo G'];
          /* aqui arriba ⬆️⬆️⬆️ hacer una 2da la conexcion a basew de datos para traer los nombres de los equipos*/
          /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */


          // No limpiar los campos y equipos seleccionados aquí

          // Limpiar los campos y equipos seleccionados
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











    /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */



    agregarEquipo(equipo: string): void {
      // Verificar si el equipo ya está presente en la lista de equipos seleccionados
      if (!this.equiposSeleccionados.includes(equipo)) {
        // Agregar equipo a la lista de equipos seleccionados solo si no está presente
        this.equiposSeleccionados.push(equipo);
        // Eliminar equipo de la lista de equipos disponibles
        this.equiposDisponibles = this.equiposDisponibles.filter(e => e !== equipo);
    } else {
        // Si el equipo ya está seleccionado, puedes mostrar un mensaje de error o simplemente ignorar la acción
        console.log('El equipo ya está seleccionado');
        Swal.fire({
          position: "top-end",
          title: 'Operación no realizada',
          text: 'Este equipo ya esta selecionado, verifica tu seleccion',
                    icon: 'warning',
          timer: 2500,
          showConfirmButton: false,

        });
    }
      // 🦖 Método para agregar un equipo a la lista de equipos seleccionados
      // Agregar equipo a la lista de equipos seleccionados
      //this.equiposSeleccionados.push(equipo);
      // Eliminar equipo de la lista de equipos disponibles
    // this.equiposDisponibles = this.equiposDisponibles.filter(e => e !== equipo);
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
    search(): void {
      if (this.searchTerm) {
          this.equiposDisponibles = this.equiposDisponibles.filter(equipo =>
              equipo.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
      } else {
          // Si no hay término de búsqueda, restaurar la lista completa de equipos disponibles
          this.equiposDisponibles = ['Equipo A', 'Equipo B', 'Equipo C', 'Equipo D', 'Equipo E', 'Equipo F', 'Equipo G' ,'Equipo 1' ,'Equipo 2' ,'Equipo 3' ,'Equipo 4' ,'Equipo 5' ,'Equipo 6' ,'Equipo 7' ,'Equipo 8' ,'Equipo 9'];
      /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */
  //segunda coneccion a base de datos XD
        }
  }



  }
