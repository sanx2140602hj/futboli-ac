import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JugadorSelectionService} from '../../../../service/cardId.service';
@Component({
  selector: 'app-admin-jugadores',
  templateUrl: './admin-jugadores.component.html',
  styleUrls: ['./admin-jugadores.component.css']
})
export class AdminJugadoresComponent implements OnInit {
  @Output() JugadorSelectionService = new EventEmitter<number>();

  jugadores: any[] = [];
  nuevoJugadorNombre: string = '';
  searchTerm: string = ''; // Agrega la propiedad searchTerm aquí

  constructor(private http: HttpClient, private jugadorSelectionService:JugadorSelectionService) { }

  ngOnInit() {
    this.fetchGETjugadores();

  }
/* 🦖🦖🦖🦖🦖🦖🦖🦖🦖🦖 */
/* ⚠️⚠️⚠️NO BORRAR ESTO QUE ESTA ENTRE DINOSAURIOS⚠️⚠️⚠️ */
  agregarJugador() {
    if (this.nuevoJugadorNombre.trim() !== '') {
      this.jugadores.push({ id: this.jugadores.length + 1, nombre: this.nuevoJugadorNombre });
      this.nuevoJugadorNombre = ''; // Limpiar el campo después de agregar un jugador
    }
    this.ngOnInit();

  }/* 20/04/2024 */
  /* ⚠️⚠️⚠️No se que hace o porque existe 
  el codigo, pero si se borra no se pueden 
  guardar ni visualizar elementos con la base de datos⚠️⚠️⚠️ */
/*   🦕🦕🦕🦕🦕🦕🦕 */ 
 fetchGETjugadores() {
    this.http
      .get<any[]>('http://localhost:3000/jugadores/receive')
      .subscribe(
        (data) => {
          if (Array.isArray(data)) {

              this.jugadores = data;
              console.log(this.jugadores)
            
          } else {
            console.error(
              'La respuesta del servidor no contiene un array de equipos:',
              data
            );
          }
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          // Aquí puedes agregar código para manejar el error, como mostrar un mensaje al usuario
        }
      );
  }
  seleccionarTorneo(id: number) {
    console.log("Vamos enviar el id: ", id)
    this.jugadorSelectionService.setSelectedId(id);
    this.ngOnInit();

  }



}
