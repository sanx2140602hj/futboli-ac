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

}
 

/* admin-categorias.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css']
})
export class AdminCategoriasComponent implements OnInit {
  isModalOpen: boolean = false;
  newCategory: string = '';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveCategory() {
    // Agrega aquí la lógica para guardar la nueva categoría
    // Puedes acceder al valor del input con this.newCategory
    this.closeModal();
  }
}
*/