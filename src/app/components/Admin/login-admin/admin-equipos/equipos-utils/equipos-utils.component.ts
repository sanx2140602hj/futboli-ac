import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { TeamSelectionService } from '../../../../../service/team-selection.service';

@Component({
  selector: 'app-equipos-utils',
  templateUrl: './equipos-utils.component.html',
  styleUrls: ['./equipos-utils.component.css']
})
export class EquiposUtilsComponent implements OnInit {
  @Output() selectedTeamIdEvent = new EventEmitter<number>();

  @Input() equiposId: number | null = null; // Recibir el ID del equipo como entrada
  IDprueba: any = {};
  selectedTeamId: number | null = null; // Variable para almacenar el ID de la categoría seleccionada
  selectedRow: HTMLElement | null = null; // Variable para almacenar la fila seleccionada

/* -------------------- */
  tecDir = [
    {id: 1, nombre: 'supermar', cargo: 'director'},
    {id: 2, nombre: 'batman', cargo: 'jefe'},
    {id: 3, nombre: 'spiderman', cargo: 'chef'},
    {id: 4, nombre: 'hulk', cargo: 'conductor'},
    {id: 5, nombre: 'logan', cargo: 'profesor'},
    {id: 6, nombre: 'thor', cargo: 'guardia'},
    {id: 7, nombre: 'ironman', cargo: 'ingeniero'},
    {id: 8, nombre: 'captainamerica', cargo: 'vigilante'}
  ];
  jugadores = [
    {id: 1, nombre: 'deadpool', posicion: 'portero', partidosJugados: 2, partidosAusentados: 3, goles: 9, tarjetasAmarillas: 2, tarjetasRojas:5},
    {id: 2, nombre: 'spiderman', posicion: 'delantero', partidosJugados: 5, partidosAusentados: 1, goles: 15, tarjetasAmarillas: 0, tarjetasRojas: 1},
    {id: 3, nombre: 'hulk', posicion: 'defensa', partidosJugados: 6, partidosAusentados: 2, goles: 2, tarjetasAmarillas: 3, tarjetasRojas: 0},
    {id: 4, nombre: 'wolverine', posicion: 'mediocampista', partidosJugados: 4, partidosAusentados: 0, goles: 8, tarjetasAmarillas: 1, tarjetasRojas: 0},
    {id: 5, nombre: 'ironman', posicion: 'portero', partidosJugados: 7, partidosAusentados: 1, goles: 0, tarjetasAmarillas: 0, tarjetasRojas: 0},
    {id: 6, nombre: 'captainamerica', posicion: 'delantero', partidosJugados: 8, partidosAusentados: 0, goles: 12, tarjetasAmarillas: 2, tarjetasRojas: 1},
    {id: 7, nombre: 'thor', posicion: 'defensa', partidosJugados: 5, partidosAusentados: 3, goles: 1, tarjetasAmarillas: 1, tarjetasRojas: 0},
    {id: 8, nombre: 'blackwidow', posicion: 'mediocampista', partidosJugados: 6, partidosAusentados: 1, goles: 5, tarjetasAmarillas: 0, tarjetasRojas: 0}

  ]
  ljugador = [
    {id: "0001", nombre: 'catgoria'},
    {id: "0002", nombre: 'catgoria 2'},
    {id: "0003", nombre: 'catgoria 3'},
    {id: "0004", nombre: 'catgoria 4'},
    {id: "0005", nombre: 'catgoria 5'},
    {id: "0006", nombre: 'pepe'},
    {id: "0007", nombre: 'juan'},
    {id: "0008", nombre: '4'},

  ];
  //para buscar
  searchTerm: string = '';
  /* +++++++++++++++++++++++++++++++++++++++++++++++ */
  showDirectorModal = false;
  showPresidenteModal = false;
  showEditarModal = false;
  showEliminarModal = false;
  showEliminarJugadorModal= false;

 constructor( private http: HttpClient, private TeamSelectionService: TeamSelectionService) { }
  //constructor(private teamSelectionService: TeamSelectionService) {}

  ngOnInit() {
    this.selectedTeamId = this.TeamSelectionService.getSelectedId();
    console.log('ID del equipo seleccionado:', this.selectedTeamId);
  }
  openDirectorModal(){
    this.showDirectorModal = true;
  }
  closeDirectorModal() {
    this.showDirectorModal = false;
  }
  /* ------------------------------------------------- */
  openPresidenteModal(){
    this.showPresidenteModal = true;
  }
  closePresidenteModal(){
    this.showPresidenteModal = false;
  }
  /* ------------------------------------------------- */
  openEditarModal(){
    this.showEditarModal = true
  }
  closeEditarModal(){
    this.showEditarModal = false
  }
  /* ------------------------------------- */
  openEliminarModal(){
    this.showEliminarModal = true;
  }
  closeEliminarModal(){
    this.showEliminarModal = false;
  }
    /* ------------------------------------- */
    openEliminarJugadorModal(){
      this.showEliminarJugadorModal = true;
    }
    closeEliminarJugadorModal(){
      this.showEliminarJugadorModal = false;
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
}
