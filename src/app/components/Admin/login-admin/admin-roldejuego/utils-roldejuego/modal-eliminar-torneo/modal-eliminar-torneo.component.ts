import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-eliminar-torneo',
  templateUrl: './modal-eliminar-torneo.component.html',
  styleUrls: ['./modal-eliminar-torneo.component.css']
})
export class ModalEliminarTorneoComponent {
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
      Swal.fire({
        position: "top-end",
        title: 'Eliminado con éxito',
        icon: 'info', 
        iconColor: 'red',
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      this.error = true; // Establecer la variable de error como verdadera
      Swal.fire({
        position: "top-end",
        title: 'Verifica la informacion',
        icon: 'question', 
        iconColor: 'orange',
        timer: 2500,
        showConfirmButton: false,
      });
    }
  }
}