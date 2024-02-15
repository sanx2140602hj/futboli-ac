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
  error: boolean = false; // Variable para controlar si hay error

  @Output() onCloseModal = new EventEmitter<void>();

  closeModal() {
    console.log('Modal de eliminación cerrado');
    this.onCloseModal.emit();
  }

  guardarCambios() { /*⚠️⚠️ aqui cambiar 'dad' por variable de BD ⚠️⚠️ */
    if (this.categoriaEliminar === 'dad') {
      // Aquí iría la lógica para conectar con la base de datos y eliminar la categoría
      console.log('Nombre del equipo:', this.checkboxChecked, this.categoriaEliminar);
      this.closeModal(); // Cerrar el modal después de guardar los cambios
    } else {
      this.error = true; // Establecer la variable de error como verdadera
    }
  }
}