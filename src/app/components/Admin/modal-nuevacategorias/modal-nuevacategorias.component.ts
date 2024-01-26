import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-nuevacategorias',
  templateUrl: './modal-nuevacategorias.component.html',
  styleUrls: ['./modal-nuevacategorias.component.css']
})
export class ModalNuevacategoriasComponent {
  // Evento de salida para notificar el cierre del modal al componente padre
  @Output() onCloseModal = new EventEmitter<void>();

  // Método para cerrar el modal y emitir el evento al componente padre
  closeModal() {
    console.log('Modal cerrado'); // ⚠️ Se muestra un log en la consola
    this.onCloseModal.emit(); // ⚠️ Se emite el evento para notificar el cierre del modal al componente padre dentro de modal-nuevacategorias.component.ts
  }
}
