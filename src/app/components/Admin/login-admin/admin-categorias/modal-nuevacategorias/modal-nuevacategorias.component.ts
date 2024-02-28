import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal-nuevacategorias',
  templateUrl: './modal-nuevacategorias.component.html',
  styleUrls: ['./modal-nuevacategorias.component.css']
})
export class ModalNuevacategoriasComponent {
    nombreCategoria: string = ''; // Propiedad para almacenar el valor del input
  // Evento de salida para notificar el cierre del modal al componente padre
  @Output() onCloseModal = new EventEmitter<void>();

  // Método para cerrar el modal y emitir el evento al componente padre
  closeModal() {
    console.log('Modal cerrado'); // ⚠️ Se muestra un log en la consola
    this.onCloseModal.emit(); // ⚠️ Se emite el evento para notificar el cierre del modal al componente padre dentro de modal-nuevacategorias.component.ts
  } guardarCategoria() {
    console.log('Nombre de la categoría:', this.nombreCategoria); 
    this.onCloseModal.emit();
    Swal.fire({
      title: 'Error!',
      text:  this.nombreCategoria,
      icon: 'error',
      timer: 900,
    })
  }
}
