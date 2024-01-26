import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css']
})
export class AdminCategoriasComponent implements OnInit {

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
}
