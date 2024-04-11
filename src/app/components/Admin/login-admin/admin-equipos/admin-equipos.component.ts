import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TeamSelectionService } from '../../../../service/team-selection.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-admin-equipos',
  templateUrl: './admin-equipos.component.html',
  styleUrls: ['./admin-equipos.component.css'],
  providers: [DatePipe] 
})
export class AdminEquiposComponent implements OnInit {
  @Output() selectedTeamIdEvent = new EventEmitter<number>();
 
  equipos: any[] = [];
  categorias: any[] = []; //este solo es para ID no sirve para nada mas
  selectedTeamId: number | null = null; // Variable para almacenar el ID de la categoría seleccionada
  selectedRow: HTMLElement | null = null; // Variable para almacenar la fila seleccionada
  categoryId: number | null = null; // Nueva variable para almacenar el ID de la categoría para el modal de edición

  //para buscar
  searchTerm: string = '';
  /* +++++++++++++++++++++++++++++++++++++++++++++++ */


  showRegistrarModal = false;
  showEditarModal = false;
  showEliminarModal = false;

  constructor(private http: HttpClient, private TeamSelectionService: TeamSelectionService) {
    this.showRegistrarModal = false;
    this.showEditarModal = false;
    this.showEliminarModal = false;
}

ngOnInit() {
  
  //consulta para datos EQUIPOS ⚽⚽
  this.http.get<any[]>('http://localhost:3000/equipos/receive').subscribe(
      (data) => {
          if (Array.isArray(data)) {
              this.equipos = data;
          } else {
              console.error('La respuesta del servidor no contiene un array de equipos:', data);
          }
      },
      (error) => {
          console.error('Error en la solicitud:', error);
          // Aquí puedes agregar código para manejar el error, como mostrar un mensaje al usuario
      }
  );
//consulta para datos Categorias 🪟🪟
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

getCategoriaNombre(idCategoria: number): string {
  const categoria = this.categorias.find(c => c.id === idCategoria);
  return categoria ? categoria.nombre : 'Categoría no encontrada';
}


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

  openRegistrarModal() {
    
    this.showRegistrarModal = true;
  }

  closeRegistrarModal() {
    this.showRegistrarModal = false;
  }
/* ------------------------------------------ */
openEditarModal() {
  console.log('Modal de edición abierto');
  console.log(this.selectedTeamId);
  if (this.selectedTeamId !== null) {
    this.showEditarModal = true;
    this.categoryId = this.selectedTeamId; // Asignar el ID de la categoría a la nueva variable
  } else {
    console.error('Error: No se ha seleccionado ninguna categoría para editar');
  }
}


  closeEditarModal() {
    this.showEditarModal = false;
  }
  /* ------------------------------------- */
  openEliminarModal(){
    console.log('Modal de edición abierto');
    console.log(this.selectedTeamId);
    if (this.selectedTeamId !== null) {
      this.showEliminarModal = true;
      this.categoryId = this.selectedTeamId; // Asignar el ID de la categoría a la nueva variable
    } else {
      console.error('Error: No se ha seleccionado ninguna categoría para editar');
    }
  }
  closeEliminarModal(){
    this.showEliminarModal = false;
  }

}
