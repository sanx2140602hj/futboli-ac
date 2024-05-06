import { Component, OnInit, Input } from '@angular/core';
import { TorneoSelectionService } from '../../../../../service/torneo-selection.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

// 🌎 Define la constante server con la URL del servidor
const server = 'http://localhost:3000';

@Component({
  selector: 'app-utils-roldejuego',
  templateUrl: './utils-roldejuego.component.html',
  styleUrls: ['./utils-roldejuego.component.css'],
})
export class UtilsRoldejuegoComponent implements OnInit {
  @Input() torneoId: number | null = null; // Recibir el ID de la categoría como entrada

  mostrarCardSorteo: boolean = false; // Puedes inicializarla como true si deseas que la card esté visible por defecto
  mostrarCardDatabase: boolean = true; // Puedes inicializarla como true si deseas que la card esté visible por defecto
  getTeamsofTorneo: any[] = [];
  getJornandasOfData: any[] = [];
  sorteoJornadasFrontend: any[] = [];
  sorteoJornadasId: any[] = [];
  getTorneo: any[] = [];
  clicsRestantes: number = 0; // Número máximo de clics permitidos
  clicsRestantesSorteo: number = 1; // Número máximo de clics permitidos
  categorias: any[] = [];
  idCategorias: number | null = null;
  constructor(private http: HttpClient, private torneoSelectionService: TorneoSelectionService) { }

  ngOnInit(): void {
    this.torneoId = this.torneoSelectionService.getSelectedId();
    console.log("Jornadas para el id, (intento 2): ", this.torneoId)
    this.fetchGetTorneo();
    this.fetchGetDataTorneoConEquipos();
    this.fetchGetDataJornadas();
  }

  agregarEquiposClasificados = false;

  // Método para abrir el modal
  openModal() {
    console.log('Modal abierto'); // ⚠️ Se muestra un log en la consola
    this.fetchGetTorneo();                       
    this.agregarEquiposClasificados = true; // ⚠️ Se establece en true para mostrar el modal
    this.fetchGetTorneo();                       

  }

  // Método para cerrar el modal
  closeModal() {
    console.log('Modal cerrado'); // ⚠️ Se muestra un log en la consola
    this.fetchGetTorneo();
    this.agregarEquiposClasificados = false; // ⚠️ Se establece en false para ocultar el modal
    this.fetchGetTorneo();                       

  }
  /* ------------------------------------------ */
  editarinfoequipos = false;
  infoOpenModal() {
    console.log('Modal cerrado');
    this.fetchGetTorneo();
    this.editarinfoequipos = true;
    this.fetchGetTorneo();                       

  }
  infoCloseModal() {
    console.log('Modal open');
    this.fetchGetTorneo();
    this.editarinfoequipos = false;
    this.fetchGetTorneo();                       

  }
  /* ------------------------------------------ */
  eliminarTorneo = false;
  eliminarTorneOpenModal() {
    console.log('Modal open');
    this.fetchGetTorneo();
    this.eliminarTorneo = true;
    this.fetchGetTorneo();                       


  }
  eliminarTorneCloseModal() {
    console.log('Modal cerrado');
    this.fetchGetTorneo();
    this.eliminarTorneo = false;
    this.fetchGetTorneo();                       

  }

  //🐞 Función para el sorteo de equipos.
  //Actulización 20/4/2024 -> 4:49pm
  generarJornadas(equipos: any[]) {
    //🪐 Condiciona si hay posibilidad de hacer sorteo.
    if (this.clicsRestantesSorteo > 0) {
      this.mostrarCardSorteo = true; 
      this.mostrarCardDatabase = false;
      console.log("clickSorteo: ", this.clicsRestantesSorteo);
      this.clicsRestantesSorteo--;
      console.log("clickSorteo: ", this.clicsRestantesSorteo);
      //🪐 Obtenemos el id del torneo que esta de manera global.
      const idTorneos = this.torneoId;
      //🪐 Aquí obtenermos a todos los equipos que estan ligados a dicho torneo.
      const totalEquipos = equipos.length;
      //🪐 Creamos la fórmula para determinar la cantidad de jornadas y creamos un objeto para guardar el resultado final.
      let jornadas = totalEquipos % 2 === 0 ? totalEquipos - 1 : totalEquipos;
      const jornadasDeJuegoId = [];
      const jornadasDeJuegoNombre = [];

      //🪐 Creamos un array con los Id's y nombres de los equipos
      const equiposId = equipos.map(equipo => equipo.id);

      for (let jornada = 1; jornada <= jornadas; jornada++) {
        const partidos = [];
        let equiposRestantes = [...equiposId];
        const nombresPartidos = [];

        //🪐 En cada jornada, agrupamos los equipos de dos en dos y asignamos el descanso si es necesario
        for (let i = 0; i < totalEquipos / 2; i++) {
          const equipoA = equiposRestantes.shift();
          const equipoB = equiposRestantes.pop() || null;
          partidos.push([equipoA, equipoB]);

          // Transformar los IDs de los equipos en nombres de equipos
          const nombreEquipoA = equipos.find(equipo => equipo.id === equipoA)?.nombre;
          //const nombreEquipoB = equipoB ? equipos.find(equipo => equipo.id === equipoB)?.nombre : 'Descanso';
          const nombreEquipoB = equipoB ? equipos.find(equipo => equipo.id === equipoB)?.nombre : null;
          //🪐 Almacenar los nombres de los partidos
          nombresPartidos.push([nombreEquipoA, nombreEquipoB]);
        }
        jornadasDeJuegoId.push({ id_torneos: idTorneos, numeroJornada: jornada, partidos: partidos });
        jornadasDeJuegoNombre.push({ id_torneos: idTorneos, numeroJornada: jornada, nombresPartidos: nombresPartidos }); // Almacenar los nombres de los partidos de esta jornada
        equiposId.unshift(equiposId.pop());
      }
      this.sorteoJornadasFrontend = jornadasDeJuegoNombre;
      this.sorteoJornadasId = jornadasDeJuegoId
    } else {
      this.mensajeAlerta('info', 'Sorteos agotados', 'No puede generar nuevamente este sorteo.', false, 2500);
    }
  }

  guardarSorteoJornadas() {
    this.verificacionDataJornadas();
    if (this.sorteoJornadasFrontend.length === 0 || this.sorteoJornadasId.length === 0) {
      this.mensajeAlerta('warning', 'Datos vacíos', 'Por favor de click al botón sorteo aleatorio.', false, 3000);
    } else if (this.clicsRestantes > 0) {
      console.log("clickSorteo: ", this.clicsRestantes);
      this.clicsRestantes--;
      console.log("clickSorteo: ", this.clicsRestantes);
      console.log('📬📬👀Se va a guardar los datos.');

      const dataParaEnviar = JSON.stringify(this.sorteoJornadasId);
      console.log("Jornadas con Id: ", dataParaEnviar);

      fetch(`http://localhost:3000/jornadas/new`, {
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
          console.log('Respuesta del servidor:', data);
          // Aquí puedes agregar la lógica para manejar la respuesta del servidor
        })
        .catch(error => {
          console.error('Error en la solicitud:', error);
          // Aquí puedes agregar la lógica para manejar el error
        });

      console.log('📫Se guardaron los datos.');
      this.mensajeAlerta('success', 'Datos guardados', 'Los datos del sorteo se han guardado correctamente', false, 2500);
      this.fetchGetDataJornadas();
      this.mostrarCardSorteo = false; 
      this.mostrarCardDatabase = true;
    } else {
      this.mensajeAlerta('error', 'Error', 'Ya existen datos, no puede guardar este sorteo.', false, 3000);
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

  verificacionDataJornadas() {
    const vale = this.getJornandasOfData.length;
    if (this.getJornandasOfData.length == 0) {
      console.log("length tiene que ser cero : ", vale);
      console.log("Aumentó en 1 para guardar")
      this.clicsRestantes = 1;
    } else {
      console.log("Quitó el de 1 para guardar")
      this.clicsRestantes = 0;
      this.mensajeAlerta('warning', 'Existencia de datos', 'Ya existen tegistros.', false, 3000);
    }
  }

  /* ------📬📦 FUNCIONES FETCH's 📦📬------*/
  data: any[] = []

  // Realizar la solicitud GET para obtener los datos de la tabla categorias
  fetchGetTorneo() {
    this.http.get<any[]>(`http://localhost:3000/torneos/receive/play/${this.torneoId}`)
      .subscribe(data => {
        console.log('Datos de la tabla esto trae nombre y tipo de categoria:', data);
        this.getTorneo = data;
        // Guardar el valor de id_categorias en la variable idCategorias
        if (data && data.length > 0) {
          this.idCategorias = data[0].id_categorias;
          console.log("ID de categorias ⭐⭐⭐ ", this.idCategorias );
          // Una vez que tengas el idCategorias, llama a GetparaTabla()
          this.GetparaTabla();
        }
      }, error => {
        console.error('Error en la solicitud:', error);
      });
  }
  nombre: string | undefined;
  GetparaTabla() {
    console.log("Entro a get categoria 🦖🦖🦖")
    // Verifica si this.idCategorias tiene un valor válido antes de hacer la solicitud GET
    if (this.idCategorias) {
      this.http.get<any[]>(`http://localhost:3000/categorias/receive/${this.idCategorias}`).subscribe(
        (data) => {
          console.log('esto debe treer datos de id categorias🦖🦖🦖 :', data);
          this.categorias = data;
              // Si data es un arreglo y tiene al menos un elemento, extrae el nombre del primer elemento y asígnalo a la variable nombre
              if (Array.isArray(data) && data.length > 0) {
                this.nombre = data[0].nombre;
                console.log('Nombre:', this.nombre);
              }
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
    } else {
      console.error('El valor de this.idCategorias es nulo o no válido.');
    }
  }
  //Realizar la solicitud ger para obtener los datos de la tabla torneos con equipos vigentes.
  fetchGetDataTorneoConEquipos() {
    this.http.get<any[]>(`http://localhost:3000/equipos/receive/tournament/${this.torneoId}`)
      .subscribe(data => {
        this.getTeamsofTorneo = data;
      }, error => {
        console.error('Error en la solicitud:', error);
      });
  }
  //Traerá información del sorteo que se guardó de todas las jorndas de juego pespecto al Id.
  fetchGetDataJornadas() {
    this.http.get<any[]>(`http://localhost:3000/jornadas/receive/${this.torneoId}`)
      /* .subscribe(data => {
        this.getJornandasOfData = data;
        console.log("datos ", this.getJornandasOfData);
      } */
      .subscribe(data => {
        // Supongamos que tienes una lista de equipos llamada "equipos" en tu componente
        const equiposMap = new Map<number, string>(); // Mapa para mapear IDs de equipos a nombres
  
        // Suponiendo que equipos es una lista de objetos con propiedades id y nombre
        for (const equipo of this.getTeamsofTorneo) {
          equiposMap.set(equipo.id, equipo.nombre); // Asigna los nombres de los equipos al mapa
        }
  
        // Mapea los IDs de equipos en getJornandasOfData a sus nombres correspondientes
        this.getJornandasOfData = data.map(jornada => ({
          ...jornada,
          nombre_equipo1: equiposMap.get(jornada.id_equipo1),
          nombre_equipo2: equiposMap.get(jornada.id_equipo2)
        }));
  
        console.log("datos ", this.getJornandasOfData);
      }, error => {
        console.error('Error en la solicitud:', error);
      });
  }
}

