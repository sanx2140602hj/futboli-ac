import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-descripcioncategorias',
  templateUrl: './modal-descripcioncategorias.component.html',
  styleUrls: ['./modal-descripcioncategorias.component.css']
})
export class ModalDescripcioncategoriasComponent {
  comentario: string = '';

  @Output() onCloseModal = new EventEmitter<void>();

  closeModal() {
    console.log('Modal de descripción cerrado');
    this.onCloseModal.emit();
  }

  guardarModal() {
    // Lógica para guardar el comentario después de la confirmación
    console.log('Comentario guardado:', this.comentario);
    this.closeModal();
  }
}
