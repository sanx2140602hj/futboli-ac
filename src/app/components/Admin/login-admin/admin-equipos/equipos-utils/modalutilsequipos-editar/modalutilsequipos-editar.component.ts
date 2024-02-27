import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalutilsequipos-editar',
  templateUrl: './modalutilsequipos-editar.component.html',
  styleUrls: ['./modalutilsequipos-editar.component.css']
})
export class ModalutilsequiposEditarComponent implements OnInit {
// Evento de salida para notificar el cierre del modal al componente padre
  // Evento de salida para notificar el cierre del modal al componente padre
  @Output() onCloseModal = new EventEmitter<void>();
  dirTec: string = '';
  opciones: string[] = ["Presidente", "Vicepresidente", "Tesorero"]; // Opciones predefinidas
  nuevaOpcion: string = '';
  selectedOption: string = '';

  constructor() { }

  agregarOpcion() {
    if (this.nuevaOpcion.trim() !== '') {
      this.opciones.push(this.nuevaOpcion);
      this.selectedOption = this.nuevaOpcion; // Seleccionar la nueva opción recién agregada
      this.nuevaOpcion = ''; // Limpiar el campo de entrada después de agregar la opción
    } else {
      console.error('Error: Debe ingresar un valor para la nueva opción.');
      // Aquí puedes agregar lógica adicional para manejar el error
    }
  }

  ngOnInit(): void {
  }

  // Método para cerrar el modal y emitir el evento al componente padre
  closeModal() {
    console.log('Modal cerrado'); // Se muestra un log en la consola
    this.onCloseModal.emit(); // Se emite el evento para notificar el cierre del modal al componente padre
  }

  guardarCambios() {
    // Lógica para guardar los cambios en el equipo
    console.log('Nombre del director técnico: ', this.dirTec);
    this.closeModal(); // Cerrar el modal después de guardar los cambios
  }

  opcionSeleccionada() {
    console.log('Nueva opción seleccionada:', this.selectedOption);
  }
}