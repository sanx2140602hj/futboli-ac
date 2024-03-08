import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalutilsequipos-registrodelpresidente',
  templateUrl: './modalutilsequipos-registrodelpresidente.component.html',
  styleUrls: ['./modalutilsequipos-registrodelpresidente.component.css']
})
export class ModalutilsequiposRegistrodelpresidenteComponent {
  // Evento de salida para notificar el cierre del modal al componente padre
  @Output() onCloseModal = new EventEmitter<void>();
  posicionJugador: string = '';
  submitted: boolean = false; // Variable para rastrear si se ha intentado enviar el formulario

  constructor() { }

  ngOnInit(): void {
  }

  // Método para cerrar el modal y emitir el evento al componente padre
  closeModal() {
    console.log('Modal cerrado'); // ⚠️ Se muestra un log en la consola
    this.onCloseModal.emit(); // ⚠️ Se emite el evento para notificar el cierre del modal al componente padre dentro de modal-nuevacategorias.component.ts
  }

  guardarCambios() {
    // Marcar el formulario como enviado
    this.submitted = true;

    // Si el formulario es válido
    if (this.posicionJugador) {
      // Lógica para guardar los cambios en el equipo
      console.log('Posicion del jugador: ', this.posicionJugador);
      Swal.fire({
        position: "top-end",
        title: 'Generado con éxito',
        text: 'Cambio generado: ' + this.posicionJugador,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
      this.closeModal(); // Cerrar el modal después de guardar los cambios
    }
  }
}
