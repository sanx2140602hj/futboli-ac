import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css']
})





export class AdminCategoriasComponent implements OnInit {
  categorias = [
    { id: 1, nombre: 'Categoría 1', descripcion: 'Descripción 1', fechaCreacion: 'Fecha 1' },
    { id: 2, nombre: 'Categoría 2', descripcion: 'Descripción 2', fechaCreacion: 'Fecha 2' },
    { id: 3, nombre: 'Categoría 3', descripcion: 'Descripción 3', fechaCreacion: 'Fecha 3' },
    { id: 4, nombre: 'Categoría 4', descripcion: 'Descripción 4', fechaCreacion: 'Fecha 4' },
    { id: 5, nombre: 'Categoría 5', descripcion: 'Descripción 5', fechaCreacion: 'Fecha 5' },
    { id: 6, nombre: 'Categoría 6', descripcion: 'Descripción 6', fechaCreacion: 'Fecha 6' },
    // Puedes agregar más objetos aquí o hacer la conecion a bd
  ];
  //para buscar
  searchTerm: string = '';
  /* +++++++++++++++++++++++++++++++++++++++++++++++ */
  constructor() { }

  ngOnInit(): void {
  }
  
  // Variable para controlar la visibilidad del modal
  showModal = false;

  // Método para abrir el modal
  openModal() {
    console.log('Modal abierto'); // ⚠️ Se muestra un log en la consola
    this.showModal = true; // ⚠️ Se establece en true para mostrar el modal
  }

  // Método para cerrar el modal
  closeModal() {
    console.log('Modal cerrado'); // ⚠️ Se muestra un log en la consola
    this.showModal = false; // ⚠️ Se establece en false para ocultar el modal
  }
  /* ------------------------------------------------ */
  showEditarModal = false;

  openEditarModal() {
    console.log('Modal de edición abierto'); 
    this.showEditarModal = true;
  }

  closeEditarModal() {
    console.log('Modal de edición cerrado'); 
    this.showEditarModal = false; 
  }
  /* ---------------------------------------------------- */
  showEliminarModal = false;

  openEliminarModal() {
    console.log('Modal de eliminación abierto'); 
    this.showEliminarModal = true;
  }

  closeEliminarModal() {
    console.log('Modal de eliminación cerrado'); 
    this.showEliminarModal = false; 
  }

  /* -------------------------------- */
 // Nueva propiedad para controlar la visibilidad del modal de descripción
 showDescripcionModal = false;

 // Método para abrir el modal de descripción
 openDescripcionModal() {
   console.log('Modal de descripción abierto');
   this.showDescripcionModal = true;
 }

 // Método para cerrar el modal de descripción
 closeDescripcionModal() {
   console.log('Modal de descripción cerrado');
   this.showDescripcionModal = false;
 }



}