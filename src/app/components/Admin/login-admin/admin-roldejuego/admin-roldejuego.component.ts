import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TorneoSelectionService } from '../../../../service/torneo-selection.service';
import Swal from 'sweetalert2'

// 🌎 Define la constante server con la URL del servidor
const server = 'http://localhost:3000';

@Component({
  selector: 'app-admin-roldejuego',
  templateUrl: './admin-roldejuego.component.html',
  styleUrls: ['./admin-roldejuego.component.css']
})
export class AdminRoldejuegoComponent implements OnInit {
  @Output() selectedTorneoIdEvent = new EventEmitter<number>();
  selectedTorneoId: number | null = null; // Nueva variable para almacenar el ID de la categoría para el modal de edición para buscar
  //🌎Variables dónde se almacenará los datos de las fucniones.
  searchTerm: string = '';
  searchTorneo: string = '';
  //🐞Variables para registrar un nuevo torneo.
  nombreTorneo: string = ''; // 🦖 Declara una variable para almacenar el nombre del torneo y la inicializa como una cadena vacía
  categoriaParticipar: string = ''; // 🦖 Declara una variable para almacenar la categoría a participar y la inicializa como una cadena vacía
  fechas: string = ''; // 🦖 Declara una variable para almacenar las fechas y la inicializa como una cadena vacía
  idTorneo: string = '';
  idTorneoPlay: string = '';
  equiposDisponibles: any[] = []; // 🦖 Declara una variable para almacenar los equipos disponibles para agregar y la inicializa con una lista de equipos.
  equiposSeleccionados: any[] = []; // 🦖 Declara una variable para almacenar los equipos seleccionados para participar y la inicializa como una lista vacía.
  rolesExistentes: string[] = []; // Variable para almacenar los roles existentes
  getCategorias: any[] = [];
  getTorneos: any[] = [];
  getTorneosPlayWithTeams: any[] = [];
  getEquipos: any[] = [];
  getBusquedaEquipos: any[] = [];
  getBusquedaTorneos: any[] = [];
  nombreTorneoInvalid: boolean = false; // 🦖 Declara una variable para indicar si el nombre del torneo es inválido y la inicializa como falsa
  categoriaParticiparInvalid: boolean = false; // 🦖 Declara una variable para indicar si la categoría a participar es inválida y la inicializa como falsa
  fechasInvalid: boolean = false; // 🦖 Declara una variable para indicar si las fechas son inválidas y la inicializa como falsa
  touchedNombre: boolean = false; // 🦖 Declara una variable para indicar si se ha tocado el campo de nombre del torneo y la inicializa como falsa
  touchedCategoria: boolean = false; // 🦖 Declara una variable para indicar si se ha tocado el campo de categoría a participar y la inicializa como falsa
  touchedFechas: boolean = false; // 🦖 Declara una variable para indicar si se ha tocado el campo de fechas y la inicializa como falsa
  equiposInvalid: boolean = false; // 🦖 Declara una variable para indicar si los equipos seleccionados son inválidos y la inicializa como falsa

  constructor(private http: HttpClient, private torneoSelectionService: TorneoSelectionService) { }

  ngOnInit(): void {
    // 🦖 Método del ciclo de vida de Angular que se ejecuta después de que Angular ha inicializado todas las propiedades del componente
    //🐞 Llamada a las funciones fetch's
    this.fetchGetCategories();
    this.fetchGetTeamsDisponibility();
    this.fetchGetTorneos();
    this.filtrarEquipos();
    this.fetchGetTorneosConEquipos();
  }

  seleccionarTorneo(id: number) {
    console.log("Vamos enviar el id: ", id)
    this.torneoSelectionService.setSelectedId(id);
  }

  /* ------ 📩 FUNCIONES PARA GUARDAR TORNEOs  📩 ------*/

  //👇Funciones para marcar los campos como tocados.👆
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

  //✅Funciones para validar los campos.✅
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

  //📌 Función validar y guardar datos de TORNEO
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
    
    // Si hay algún campo inválido o no hay equipos seleccionados, detener el proceso
    if (this.nombreTorneoInvalid || this.categoriaParticiparInvalid || this.fechasInvalid) {
      this.mensajeAlerta('warning', '¡Carácter no válido!', 'Por favor, verifique su información.', false, 3000)
      return;
    }
    // Si todos los campos están llenos y hay al menos un equipo seleccionado, guardar los datos
    this.guardarDatos();
  }

  guardarDatos(): void {
    // 🦖 Método para guardar los datos
    if (this.nombreTorneo && this.categoriaParticipar && this.fechas) {
      if (this.fechas) {
        // Dividir la fecha en día, mes y año
        let partesFecha = this.fechas.split('-');
        let dia = partesFecha[2];
        let mes = partesFecha[1];
        let año = partesFecha[0];

        // Concatenar los valores en el formato YYYY-mm-dd
        let fechaInicio = `${año}-${mes}-${dia}`;

        // Asignar la fecha formateada al atributo fechas
        this.fechas = fechaInicio;
      }
      // Agregar el nuevo rol al arreglo de roles existentes
      this.rolesExistentes.push(this.nombreTorneo);

      // Recopilar los datos antes de guardarlos
      const datosTorneo = {
        nombre: this.nombreTorneo,
        id_categorias: this.categoriaParticipar,
        fechaInicio: this.fechas
      };

      // Convertir el objeto dateCategoria a JSON
      const dataParaEnviar = JSON.stringify(datosTorneo);
      fetch(`${server}/torneos/new`, {
        method: 'POST',
        body: dataParaEnviar,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          //console.log('Respuesta del servidor:', data);
          this.mensajeAlerta('success', '¡Registro exitoso!', 'Se ha creado un nuevo torneo.', false, 3300);
          this.fetchGetTorneos();
        })
        .catch(error => {
          //console.error('Error en la solicitud:', error);
          this.mensajeAlerta('error', '¡Lo sentimos, parece que algo salió mal!', 'Intentelo nuevamente. Si persiste el error, favor de informar este problema al equipo de TI para su pronta resolución.', true, 6500);
        });
      // Limpiar los campos y equipos seleccionados
      this.limpiarInputs();
    } else {
      this.mensajeAlerta('warning', '¡Campos vacíos!', 'Todos los campos son requeridos.', false, 3300)
    }
  }

  limpiarInputs(): void {
    // 🦖 Método para limpiar los campos de entrada
    // Resetear los valores de los campos
    this.nombreTorneo = '';
    this.categoriaParticipar = '';
    this.fechas = '';
  }

  /* ------ 📩 FUNCIONES PARA AÑADIR EQUIPOS EN UN TORNEO | Buscador 🔍 ------*/

  onChangeTorneo(): void {
    this.filtrarEquipos();
  }

  agregarEquipo(equipos: any): void {
    // Verificar si el equipo ya está presente en la lista de equipos seleccionados
    if (!this.equiposSeleccionados.some(e => e.id === equipos.id)) {
      // Agregar equipo a la lista de equipos seleccionados solo si no está presente
      this.equiposSeleccionados.push(equipos);
      // Eliminar equipo de la lista de equipos disponibles
      this.equiposDisponibles = this.equiposDisponibles.filter(e => e !== equipos.id);
    } else {
      // Si el equipo ya está seleccionado, puedes mostrar un mensaje de error o simplemente ignorar la acción.
      this.mensajeAlerta('warning', '¡Ya ha selecionado este equipo!', 'Por favor, elija otro equipo disponible de la lista.', false, 2500);
    }
  }
  eliminarEquipo(equipo: string): void {
    // 🦖 Método para eliminar un equipo de la lista de equipos seleccionados
    this.equiposSeleccionados = this.equiposSeleccionados.filter(e => e !== equipo);
    this.equiposDisponibles.push(equipo);
  }

  //🔍 Buscar equipos desde la base de datos.
  search(): void {
    const datos = {
      nombre: this.searchTerm
    }
    if (this.searchTerm === "") {
      this.mensajeAlerta('warning', '¡Campos vacíos!', 'Todos los campos son requeridos.', false, 3300)
    } else {
      const dataParaEnviar = JSON.stringify(datos);
      fetch(`${server}/equipos/search/teams`, {
        method: 'POST',
        body: dataParaEnviar,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          this.limpiarBusquedaAgregarEquipos()
          if (data.length === 0) {
            this.mensajeAlerta('info', '¡Sin resultados!', 'No encontramos equipos disponibles relacionados con su búsqueda.', false, 4000)
            return
          } else {
            //console.log('Respuesta del servidor:', data);
            this.equiposDisponibles = data;
          }
        })
        .catch(error => {
          //console.error('Error en la solicitud:', error);
          this.mensajeAlerta('error', '¡Lo sentimos, parece que algo salió mal!', 'Intentelo nuevamente, si persiste el error informe este problema al equipo de TI para su pronta resolución.', true, 6500);
        });
    }
  }

  limpiarInputsEquipo(): void {
    // 🦖 Método para resetear los equipos seleccionados | BOTÓN CANCELAR
    this.equiposSeleccionados = [];
  }
  limpiarBusquedaAgregarEquipos() {
    this.equiposDisponibles = [];
    this.getBusquedaEquipos = [];
  }
  limpiarEquiposParticipantesParaTorneo(): void {
    // 🦖 Método para resetear los equipos seleccionados
    this.equiposDisponibles = [];
    this.equiposSeleccionados = []
    this.searchTerm = "";
    this.fetchGetTorneos();
    this.fetchGetTorneosConEquipos()
  }

  validarYGuardarEquipos(): void {
    // 🦖 Método para validar los datos antes de guardarlos
    // Validar si hay al menos un equipo seleccionado
    if (this.equiposSeleccionados.length == 0 || this.equiposSeleccionados.length < 3) {
      this.mensajeAlerta('error', '¡Equipos insuficientes!', 'Añade tres equipos como mínimo para guardar.', false, 3300)
    } else if (this.idTorneo.length == 0) {
      this.mensajeAlerta('warning', '¡Sin torneo a participar!', 'Por favor, seleccione un torneo de la lista desplegable para guardar.', false, 3300)
    } else {
      // Si todos los campos están llenos y hay al menos un equipo seleccionado, guardar los datos
      this.guardarEquiposSeleccionados();
    }
  }

  guardarEquiposSeleccionados(): void {
    // 🦖 Método para guardar los datos
    // Objeto que contiene el ID del torneo y los equipos seleccionados
    const data = {
      id_torneos: this.idTorneo,
      equiposSeleccionados: this.equiposSeleccionados
    };
    // Convertir el objeto dateCategoria a JSON
    const dataParaEnviar = JSON.stringify(data);
    fetch(`${server}/torneos/replace/teamsToTournaments`, {
      method: 'PATCH',
      body: dataParaEnviar,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        //console.log('Respuesta del servidor:', data);
        this.mensajeAlerta('success', '¡Registro exitoso!', 'Se ha creado un nuevo rol de juego.', false, 3300)
        this.limpiarEquiposParticipantesParaTorneo();
      })
      .catch(error => {
        //console.error('Error en la solicitud:', error);
        this.mensajeAlerta('error', '¡Lo sentimos, parece que algo salió mal!', 'Intentelo nuevamente, si persiste el error informe este problema al equipo de TI para su pronta resolución.', true, 6500);
      });
  }

  /* ------ 📩 FUNCIONES PARA BUSCAR TORNEOs | Buscador 🔍 ------*/

  searchTorneos(): void {
    //🐞 Creamos un objeto que almacenará la parabra a buscar.
    const datos = {
      //🐞 "nombre" es el atributo de la tabla x en la base de datos, debe coincidir, de no ser así hará errores al pasar los datos al back.
      nombre: this.searchTorneo
    }
    if (this.searchTorneo === "") {
      this.mensajeAlerta('warning', '¡Campos vacíos!', 'Todos los campos son requeridos.', false, 3300)
    } else {
      //🐞 Enviamos los datos por la notación JSON
      const dataParaEnviar = JSON.stringify(datos);
      fetch(`${server}/torneos/search`, {
        method: 'POST',
        body: dataParaEnviar,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          //🐞 Limpiamos los datos que existan y pasamos los valores traidos de 
          this.limpiarBusquedaTorneos();
          if (data.length === 0) {
            this.mensajeAlerta('info', '¡Sin resultados!', 'No encontramos torneos disponibles relacionados con su búsqueda.', false, 4000)
            return
          } else {
            //console.log('Respuesta del servidor:', data);
            this.getBusquedaTorneos = data;
          }
        })
        .catch(error => {
          //console.error('Error en la solicitud:', error);
          this.mensajeAlerta('error', '¡Lo sentimos, parece que algo salió mal!', 'Intentelo nuevamente, si persiste el error informe este problema al equipo de TI para su pronta resolución.', true, 6500);
        });
    }
  }
  limpiarBusquedaTorneos(): void {
    // 🦖 Método para limpiar los equipos seleccionados
    this.getTorneosPlayWithTeams = [];
    this.getBusquedaTorneos = [];
  }
  verTodosTorneosConEquipo(): void {
    this.getTorneosPlayWithTeams = [];
    this.getBusquedaTorneos = [];
    this.fetchGetTorneosConEquiposAll();
  }

  filtrarEquipos(): void {
    //this.equiposDisponibles = [];
    // Obtener el objeto torneo seleccionado
    const torneoSeleccionado = this.getTorneos.find(torneos => torneos.id == this.idTorneo);
    //console.log("Id del torneo seleccionado", this.idTorneo, torneoSeleccionado)
    if (torneoSeleccionado) {
      // Filtrar los equipos disponibles según el id_categoria del torneo seleccionado.
      this.equiposDisponibles = this.getEquipos.filter(equipos => equipos.id_categorias == torneoSeleccionado.id_categorias);
      //console.log("Resultados que coincidenn con el id_categorias:", this.equiposDisponibles)
    } else {
      this.equiposDisponibles = [];
    }
  }

  mensajeAlerta(icon: any, title: string, text: string, showConfirmButton: boolean, timer: number) {
    Swal.fire({
      position: 'top-end',
      icon,
      title,
      text,
      showConfirmButton,
      allowOutsideClick: false,
      timer
    });
  }
  /* ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ */
  /* ------📬📦 FUNCIONES FETCH's 📦📬------*/
  data: any[] = []
  // Realizar la solicitud GET para obtener los datos de la tabla categorias
  fetchGetCategories() {
    this.http.get<any[]>(`${server}/categorias/receive`)
      .subscribe(data => {
        this.getCategorias = data;
      }, error => {
        console.error('Error en la solicitud.');
      });
  }
  // Realizar la solicitud GET para obtener los datos de la tabla equipos disponibles
  fetchGetTeamsDisponibility() {
    this.http.get<any[]>(`${server}/torneos/receive/teams/disponibles`)
      .subscribe(data => {
        this.getEquipos = data;
      }, error => {
        console.error('Error en la solicitud.');
      });
  }
  // Realizar la solicitud GET para obtener los datos de la tabla torneos
  fetchGetTorneos() {
    this.http.get<any[]>(`${server}/torneos/receive/torneos/disponibles`)
      .subscribe(data => {
        this.getTorneos = data;
      }, error => {
        console.error('Error en la solicitud.');
      });
  }
  //Realizar la solicitud ger para obtener los datos de la tabla torneos con equipos vigentes.
  fetchGetTorneosConEquipos() {
    this.http.get<any[]>(`${server}/torneos/receive/play/false`)
      .subscribe(data => {
        this.getTorneosPlayWithTeams = data;
      }, error => {
        console.error('Error en la solicitud.');
      });
  }
  //Realizar la solicitud ger para obtener los datos de la tabla torneos con equipos vigentes.
  fetchGetTorneosConEquiposAll() {
    this.http.get<any[]>(`${server}/torneos/receive`)
      .subscribe(data => {
        this.getTorneosPlayWithTeams = data;
      }, error => {
        console.error('Error en la solicitud.');
      });
  }
}