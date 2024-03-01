import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modalutilsequipos-registrodirectortecnico',
  templateUrl: './modalutilsequipos-registrodirectortecnico.component.html',
  styleUrls: ['./modalutilsequipos-registrodirectortecnico.component.css']
})
export class ModalutilsequiposRegistrodirectortecnicoComponent implements OnInit {
  // Evento de salida para notificar el cierre del modal al componente padre
  @Output() onCloseModal = new EventEmitter<void>();
  dirTec: string = '';
  opciones: string[] = ["Presidente", "Vicepresidente", "Tesorero"]; // Opciones predefinidas
  nuevaOpcion: string = '';
  selectedOption: string = '';

  dirTecControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]);
  nuevaOpcionControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]);

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
    // Validar que el primer input tenga al menos un número, letras y espacios
    const nombreValido = /[a-zA-Z0-9]+/.test(this.dirTec.trim());
  
    // Validar que se haya seleccionado un cargo o se haya ingresado uno nuevo
    const cargoValido = this.selectedOption !== '' || this.nuevaOpcion.trim() !== '';
  
    // Verificar que ambos campos sean válidos
    if (!nombreValido || !cargoValido) {
      console.error('Error: Todos los campos son requeridos.');
      return;
    }
  
    // Si los campos son válidos, imprimir en la consola y cerrar el modal
    console.log('Nombre del director técnico:', this.dirTec);
    if (this.selectedOption !== '') {
      console.log('Cargo seleccionado:', this.selectedOption);
    } else {
      console.log('Nuevo cargo:', this.nuevaOpcion);
    }
  
    this.closeModal(); // Cerrar el modal después de guardar los cambios
  }
  

  opcionSeleccionada() {
    console.log('Nueva opción seleccionada:', this.selectedOption);
  }
}
