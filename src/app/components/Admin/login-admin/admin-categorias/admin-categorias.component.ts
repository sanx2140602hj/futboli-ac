import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CategoriaSelectionService } from '../../../../service/categoria-selection.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css'],
  providers: [DatePipe],
})
export class AdminCategoriasComponent implements OnInit {
  @Output() selectedCategoryIdEvent = new EventEmitter<number>();
  categorias: any[] = [];
  selectedCategoryId: number | null = null; // Variable para almacenar el ID de la categoría seleccionada
  selectedRow: HTMLElement | null = null; // Variable para almacenar la fila seleccionada
  categoryId: number | null = null; // Nueva variable para almacenar el ID de la categoría para el modal de edición

  constructor(private http: HttpClient, private categoriaSelectionService: CategoriaSelectionService) {}


  ngOnInit() {
    // Realizar la solicitud GET para obtener los datos de la tabla categorias
    this.http.get<any[]>('http://localhost:3000/categorias/receive').subscribe(
      (data) => {
        console.log('Datos de la tabla categorias:', data);
        this.categorias = data;
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
    
  }

  seleccionarCategoria(id: number, row: EventTarget | null) {
    if (row instanceof HTMLElement) {
      this.selectedCategoryId = id; // Almacena el ID de la categoría seleccionada

      // Reinicia el color de fondo de la fila previamente seleccionada
      if (this.selectedRow) {
        this.selectedRow.style.backgroundColor = '';
      }
      // Aplica el color de fondo a la fila seleccionada
      row.style.backgroundColor = '#b7c4ff';
      this.selectedRow = row;
    }

    this.selectedCategoryIdEvent.emit(id);
  }

  searchTerm = '';
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
  console.log(this.selectedCategoryId);
  if (this.selectedCategoryId !== null) {
          //⭐⭐⭐🦖🦖🦖
    this.showEditarModal = true;
          //⭐⭐⭐🦖🦖🦖
    this.categoryId = this.selectedCategoryId; // Asignar el ID de la categoría a la nueva variable
  } else {
    console.error('Error: No se ha seleccionado ninguna categoría para editar');
  }
}

  closeEditarModal() {
    console.log('Modal de edición cerrado');
    this.showEditarModal = false;
  }
  /* ---------------------------------------------------- */
  showEliminarModal = false;

  openEliminarModal() {
    console.log('Modal de edición abierto');
    console.log(this.selectedCategoryId);
    if (this.selectedCategoryId !== null) {
      //⭐⭐⭐🦖🦖🦖
      this.showEliminarModal = true;
      //⭐⭐⭐🦖🦖🦖
      this.categoryId = this.selectedCategoryId; // Asignar el ID de la categoría a la nueva variable
    } else {
      console.error('Error: No se ha seleccionado ninguna categoría para editar');
    }
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
    console.log('Modal de edición abierto');
    console.log(this.selectedCategoryId);
    if (this.selectedCategoryId !== null) {
            //⭐⭐⭐🦖🦖🦖
      this.showDescripcionModal = true;
            //⭐⭐⭐🦖🦖🦖
      this.categoryId = this.selectedCategoryId; // Asignar el ID de la categoría a la nueva variable
    } else {
      console.error('Error: No se ha seleccionado ninguna categoría para editar');
    }
  }
  // Método para cerrar el modal de descripción
  closeDescripcionModal() {
    console.log('Modal de descripción cerrado');
    this.showDescripcionModal = false;
  }
}
