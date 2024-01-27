// modal-eliminar-categorias.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-eliminar-categorias',
  templateUrl: './modal-eliminar-categorias.component.html',
  styleUrls: ['./modal-eliminar-categorias.component.css']
})
export class ModalEliminarCategoriasComponent {
  checkboxChecked = false;
  categoriaEliminar: string = '';

  @Output() onCloseModal = new EventEmitter<void>();

  closeModal() {
    console.log('Modal de eliminación cerrado');
    this.onCloseModal.emit();
  }

  guardarModal() {
    // Lógica para guardar la categoría después de la confirmación
    console.log('Categoría guardada:', this.categoriaEliminar);
    // Puedes agregar más lógica aquí si es necesario
    // ...
    
    this.closeModal(); // Cierra el modal después de realizar la lógica
  }
}
