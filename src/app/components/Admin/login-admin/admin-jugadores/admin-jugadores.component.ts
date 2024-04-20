import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-jugadores',
  templateUrl: './admin-jugadores.component.html',
  styleUrls: ['./admin-jugadores.component.css']
})
export class AdminJugadoresComponent implements OnInit {
  jugadores: any[] = [];
  nuevoJugadorNombre: string = '';
  searchTerm: string = ''; // Agrega la propiedad searchTerm aquí

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchGETjugadores();

  }

  agregarJugador() {
    if (this.nuevoJugadorNombre.trim() !== '') {
      this.jugadores.push({ id: this.jugadores.length + 1, nombre: this.nuevoJugadorNombre });
      this.nuevoJugadorNombre = ''; // Limpiar el campo después de agregar un jugador
    }
  }
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

}
