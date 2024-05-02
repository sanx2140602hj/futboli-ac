
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//recibe el ID desde adminEquipos
import { TeamSelectionService } from '../../../../../service/team-selection.service';
//EXPORTA id DESDE UTILS
import { EquiposUtilsSelectionService } from '../../../../../service/equiposUtils.service';
import Swal from 'sweetalert2'


// 🌎 Define la constante server con la URL del servidor
const server = 'http://localhost:3000';

@Component({
  selector: 'app-equipos-utils',
  templateUrl: './equipos-utils.component.html',
  styleUrls: ['./equipos-utils.component.css'],
})
export class EquiposUtilsComponent implements OnInit {

  jugadoresSeleccionados: any[] = [];
  edadJugador: any[] = [];
  jugadoresDisponibles: any[] = [];
  jugadoresDisponiblesEdad: any[] = [];
  jugadoresRangoAprobados: any[] = [];
  jugadoresRangoNoAprobados: any[] = [];

  jugadorLibre: any[] = [];
  jugadores: any[] = [];
  selectedTeamId: number | null = 0; // Inicializa con un valor predeterminado
  @Output() selectedTeamIdEvent = new EventEmitter<number>();

  @Input() equiposId: number | null = null;
  idSeleccionado: number | null = null;
  selectedRow: HTMLElement | null = null;
  utilsequiposId: number | null = null;

  tecDir: any[] = [];
  rolEquipos: any[] = [];
  getjugadores: any[] = [];
  searchTerm: string = '';
  idEQuiposRol: any;
  equiposUtilsSelectionService: any;
  constructor(
    private http: HttpClient,
    private TeamSelectionService: TeamSelectionService,
    private EquiposUtilsSelectionService: EquiposUtilsSelectionService
  ) {
    this.equiposUtilsSelectionService = EquiposUtilsSelectionService;
  }



  ngOnInit() {
    //este codigo es para recibir un ID que es indispencable por lo que es muy independiente a lo que se valla a manjar despues
    this.selectedTeamId = this.TeamSelectionService.getSelectedId();
    console.log('ID del equipo seleccionado:', this.selectedTeamId);
    this.fetchGETequipos();
    this.fetchGetCompararCategorias();
    this.fetchGetJugadores();

    //para exportar el equipo.id_cuadro_tecnico

    this.idSeleccionado = this.equiposUtilsSelectionService.getequiposUtilsId();
    console.log('ID seleccionado:', this.idSeleccionado);
  }

  openEditarModal(id: number) {
    console.log("abremodal???");
    this.showEditarModal = true;
    //  this.utilsequiposId = id; // Asignar el ID del equipo a la nueva variable
  }

  openEliminarModal(id: number) {
    this.showEliminarModal = true;
    this.utilsequiposId = id; // Asignar el ID del equipo a la nueva variable
  }

  seleccionarUtilsequipo(id: number, row: EventTarget | null) {
    if (row instanceof HTMLElement) {
      // Almacena el ID del equipo seleccionado en el servicio
      this.equiposUtilsSelectionService.setequiposUtilsId(id);
      console.log('ID de la fila seleccionada:', id);

      // Resto del código para resaltar la fila seleccionada, si es necesario
      this.resaltarFilaSeleccionada(row);
    }
  }


  private resaltarFilaSeleccionada(row: HTMLElement) {
    // Reinicia el color de fondo de la fila previamente seleccionada
    if (this.selectedRow) {
      this.selectedRow.style.backgroundColor = '';
    }
    // Aplica el color de fondo a la fila seleccionada
    row.style.backgroundColor = '#b7c4ff';
    this.selectedRow = row;
  }


  // #region MODALES
  /* +++++++++++++++++++++++++++++++++++++++++++++++ */
  showDirectorModal = false;
  showPresidenteModal = false;
  showEditarModal = false;
  showEliminarModal = false;
  showEliminarJugadorModal = false;
  openDirectorModal() {
    this.showDirectorModal = true;
  }
  closeDirectorModal() {
    this.showDirectorModal = false;
    this.fetchGETequipos();
  }
  /* ------------------------------------------------- */
  openPresidenteModal() {
    this.showPresidenteModal = true;
  }
  closePresidenteModal() {
    this.showPresidenteModal = false;
  }
  /* ------------------------------------------------- */

  closeEditarModal() {
    this.showEditarModal = false;
  }
  /* ------------------------------------- */

  closeEliminarModal() {
    this.showEliminarModal = false;
  }
  /* ------------------------------------- */
  openEliminarJugadorModal() {
    this.showEliminarJugadorModal = true;
  }
  closeEliminarJugadorModal() {
    this.showEliminarJugadorModal = false;
  }
  // #endregion

  limpiarJugadoresSeleccionados() {
    this.jugadoresRangoAprobados = [];
  }

  guardarYvalidarJugadores(): void {
    console.log("validando");
    if (this.jugadoresRangoAprobados.length == 0) {
      //const mensaje = `Nombre del tornero ${this.nombreTorneo} - `;
      Swal.fire({
        position: "top-end",
        title: 'Campos vacíos',
        text: "Añade más jugadores para guardar.",
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,

      });

    } else if (this.selectedTeamId == 0 || null) {
      //const mensaje = `Nombre del tornero ${this.nombreTorneo} - `;
      Swal.fire({
        position: "top-end",
        title: 'Campos vacíos',
        text: "Verifica que se haya seleccionado el equipo para guardar.",
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,

      });
    } else {
      // Si todos los campos están llenos y hay al menos un equipo seleccionado, guardar los datos
      this.guardarJugadoresSeleccionados();
    }
  }

  guardarJugadoresSeleccionados() {
    console.log("vamos a guardar")
    // 🦖 Método para guardar los datos
    if(this.jugadoresSeleccionados.length == 0){
      Swal.fire({
        position: "top-end",
        title: 'Campos vacíos',
        text: "Añade más jugadores para guardar.",
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,

      });
    } else {
    // Objeto que contiene el ID del torneo y los equipos seleccionados
    const data = {
      id_equipos: this.selectedTeamId,
      jugadoresConEquipo: this.jugadoresSeleccionados
    };
    console.log("estamos guardando")
    console.log(data)

    const dataParaEnviar = JSON.stringify(data);
    fetch(`http://localhost:3000/equipos/add/players/teams`, {
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
        console.log('Respuesta del servidor:', data);
        //Mensaje personalizado
        const mensaje = `Los jugadores se guardaron con éxito.`;
        Swal.fire({
          position: "top-end",
          title: 'Generado con exito',
          text: mensaje,
          icon: 'success',
          timer: 2500,
          showConfirmButton: false,

        });
        // Aquí puedes agregar la lógica para manejar la respuesta del servidor
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        // Aquí puedes agregar la lógica para manejar el error
      });

    console.log('Equipos seleccionados:', this.jugadoresSeleccionados); // Imprimir equipos seleccionados

    // Limpiar los campos y equipos seleccionados
    this.limpiarJugadoresSeleccionados();
    }
  }

  /* prubas */
  seleccionarCategoria(id: number, row: EventTarget | null) {
    if (row instanceof HTMLElement) {
      this.selectedTeamId = id; // Almacena el ID de la categoría seleccionada

      // Reinicia el color de fondo de la fila previamente seleccionada
      if (this.selectedRow) {
        this.selectedRow.style.backgroundColor = '';
      }
      // Aplica el color de fondo a la fila seleccionada
      row.style.backgroundColor = '#b7c4ff';
      this.selectedRow = row;
    }

    this.selectedTeamIdEvent.emit(id);
  }

  // Función para calcular la edad a partir de la fecha de nacimiento
  calcularEdad() {
    // Verificar que los jugadores estén disponibles
    if (!this.jugadoresDisponibles) {
      console.error('No hay datos de jugadores disponibles.');
      return;
    }

    const datosJugadores = this.getjugadores;

    // Extraer la edad mínima
    const edadMinima = Math.min(...datosJugadores.map(jugador => jugador.edadMin));

    // Extraer la edad máxima
    const edadMaxima = Math.max(...datosJugadores.map(jugador => jugador.edadMax));

    const edadMin = edadMinima
    const edadMax = edadMaxima

    console.log("esta es la edad min", edadMin)
    console.log("esta es la edad max", edadMax)

    // Calcular las edades de los jugadores y filtrar por el rango especificado
    this.jugadoresRangoAprobados = [];
    this.jugadoresRangoNoAprobados = [];

    this.jugadoresDisponibles.forEach(jugador => {
      // Obtener la fecha de nacimiento del jugador y convertirla en un objeto Date
      const fechaNacimiento = new Date(jugador.nacimientoFecha);

      // Calcular la edad del jugador a partir de la fecha de nacimiento
      const edadMilisegundos = Date.now() - fechaNacimiento.getTime();
      const edadAnios = new Date(edadMilisegundos).getUTCFullYear() - 1970;

      // Verificar si la edad está en el rango especificado
      if (edadAnios >= edadMin && edadAnios <= edadMax) {
        // Si la edad está en el rango, agregar el jugador a jugadoresRangoAprobados
        this.jugadoresRangoAprobados.push(jugador);
      } else {
        // Si la edad no está en el rango, agregar el jugador a jugadoresRangoNoAprobados
        this.jugadoresRangoAprobados.push(jugador);
      }
    });

    console.log('Jugadores aprobados:', this.jugadoresRangoAprobados);
    console.log('Jugadores no aprobados:', this.jugadoresRangoNoAprobados);
  }

  /** Metodo fetch--------------------------- */
  fetchGETequipos() {
    this.http
      .get<any[]>('http://localhost:3000/grupoTecnico/receive')
      .subscribe(
        (data) => {
            this.tecDir = data;
            // Obtener el ID del equipo seleccionado
            this.idEQuiposRol = this.selectedTeamId;
            console.log('equipos sin orden: ', this.tecDir)
            console.log('Valor de id_rolUsuario:', this.idEQuiposRol);
            // Llamar a fetchGETtiposroles() solo después de que this.idEQuiposRol se haya asignado
            this.fetchGETtiposroles();
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
  }

  fetchGetJugadores() {
    this.http.get<any[]>(`http://localhost:3000/jugadores/receive`)
      .subscribe(data => {
        this.jugadoresDisponibles = data;
        this.calcularEdad();
      }, error => {
        console.error('Error en la solicitud:', error);
      });
  }

  fetchGETtiposroles() {
    this.http
      .get<any[]>(`http://localhost:3000/equipos/receive/tecnicos/${this.idEQuiposRol}`)
      .subscribe(
        (response) => {

            // Si la respuesta es un array con al menos un elemento
            this.rolEquipos = response; // Asignamos la respuesta a la propiedad rolEquipos
            console.log(this.rolEquipos);

        },
        (error) => {
          console.error('Error en la solicitud:', error);
          // Aquí puedes agregar código para manejar el error, como mostrar un mensaje al usuario
        }
      );
  }

  categoriasEdades() {
    this.http
      .get<any[]>(`http://localhost:3000/equipos/receive/tecnicos/${this.idEQuiposRol}`)
      .subscribe(
        (response) => {
            // Si la respuesta es un array con al menos un elemento
            this.rolEquipos = response; // Asignamos la respuesta a la propiedad rolEquipos
            console.log(this.rolEquipos);
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          // Aquí puedes agregar código para manejar el error, como mostrar un mensaje al usuario
        }
      );
  }
  /* select de tablas jugadores ZSZ */
  fetchGetCompararCategorias() {
    this.http
      .get<any[]>(`http://localhost:3000/equipos/receive/comparar/category/${this.selectedTeamId}`)
      .subscribe(
        (data) => {
          this.getjugadores = data;
          console.log("Datos de Getjugadores", this.getjugadores)
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          // Aquí puedes agregar código para manejar el error, como mostrar un mensaje al usuario
        }
      );
  }

  

  agregarJugador(jugador: any) {
    //this.jugadoresSeleccionados.push(jugador);
    // Verificar si el equipo ya está presente en la lista de equipos seleccionados
    if (!this.jugadoresSeleccionados.some(e => e.id === jugador.id)) {
      // Agregar equipo a la lista de equipos seleccionados solo si no está presente
      this.jugadoresSeleccionados.push(jugador);
      // Eliminar equipo de la lista de equipos disponibles
      this.jugadoresRangoAprobados = this.jugadoresRangoAprobados.filter(e => e !== jugador.id);
    } else {
      // Si el equipo ya está seleccionado, puedes mostrar un mensaje de error o simplemente ignorar la acción
      console.log('El equipo ya está seleccionado');
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'Este jugador ya esta selecionado, verifica tu seleccion',
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
  eliminarJugador(jugador: any) {
    const index = this.jugadoresSeleccionados.indexOf(jugador);
    if (index !== -1) {
      this.jugadoresSeleccionados.splice(index, 1);
    }
  }


}

