import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-editar-categorias',
  templateUrl: './modal-editar-categorias.component.html',
  styleUrls: ['./modal-editar-categorias.component.css']
})
export class ModalEditarCategoriasComponent {
  editarCategoria: string = ''; // Propiedad para almacenar el valor del input
  @Output() onCloseModal = new EventEmitter<void>();

  closeModal() {
    console.log('Modal de edición cerrado');
    this.onCloseModal.emit();
  }
  editarCategoriaGuardar() {


    console.log('Nombre de la categoría:', this.editarCategoria); 
    this.onCloseModal.emit();

  }
}
