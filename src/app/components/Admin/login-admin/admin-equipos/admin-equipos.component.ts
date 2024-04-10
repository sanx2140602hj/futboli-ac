import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-equipos',
  templateUrl: './admin-equipos.component.html',
  styleUrls: ['./admin-equipos.component.css'],
  providers: [DatePipe] 
})
export class AdminEquiposComponent implements OnInit {

  categorias = [
    { id: 1, nombre: 'Equipo 1', fechaCreacion: 'Fecha 1' },
    { id: 2, nombre: 'Equipo 2', fechaCreacion: 'Fecha 2' },
    { id: 3, nombre: 'Equipo 3', fechaCreacion: 'Fecha 3' },
    { id: 4, nombre: 'Equipo 4', fechaCreacion: 'Fecha 4' },
    { id: 5, nombre: 'Equipo 5', fechaCreacion: 'Fecha 5' },
    { id: 6, nombre: 'Equipo 6', fechaCreacion: 'Fecha 6' },
    // Puedes agregar más objetos aquí o hacer la conecion a bd
  ];
  //para buscar
  searchTerm: string = '';
  /* +++++++++++++++++++++++++++++++++++++++++++++++ */


  showRegistrarModal = false;
  showEditarModal = false;
  showEliminarModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  openRegistrarModal() {
    this.showRegistrarModal = true;
  }

  closeRegistrarModal() {
    this.showRegistrarModal = false;
  }
/* ------------------------------------------ */
  openEditarModal() {
    this.showEditarModal = true;
  }

  closeEditarModal() {
    this.showEditarModal = false;
  }
  /* ------------------------------------- */
  openEliminarModal(){
    this.showEliminarModal = true;
  }
  closeEliminarModal(){
    this.showEliminarModal = false;
  }

}
