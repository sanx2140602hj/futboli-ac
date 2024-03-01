import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'

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

  dirTecControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9ñ ]*$')]);
  nuevaOpcionControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9ñ ]*$')]);

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
    const nombreValido = this.dirTecControl.valid;
  
    // Validar que la nueva opción ingresada pase las validaciones
    const nuevaOpcionValida = this.nuevaOpcionControl.valid;
  
    // Validar que se haya seleccionado una opción válida
    const opcionValida = this.opciones.includes(this.selectedOption);
  
    // Verificar que todos los campos sean válidos
    if (!nombreValido || !nuevaOpcionValida || !opcionValida) {
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de que el formulario esté completo y sin errores',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,
      });
      console.error('Error: Todos los campos son requeridos o contienen valores inválidos.');
      return;
    }
  
    // Si los campos son válidos, mostrar alerta de éxito con el contenido deseado
    const mensaje = this.selectedOption !== '' ? this.selectedOption : this.nuevaOpcion;
  
    Swal.fire({
      position: "top-end",
      title: 'Generado con éxito',
      text: `Nombre del director técnico: ${this.dirTec} - Cargo: ${mensaje}`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  
    this.closeModal(); // Cerrar el modal después de guardar los cambios
  }
  


  opcionSeleccionada() {
    // Verificar si la opción seleccionada es válida
    const validCharsRegex = /^[a-zA-Z0-9\sñ ]*$/;
    if (!this.selectedOption || !validCharsRegex.test(this.selectedOption.trim())) {
      // Si la opción seleccionada no es válida, mostrar un mensaje de error
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'La opción seleccionada no es válida',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false
      });
      console.error('Error: La opción seleccionada no es válida');
      return;
    }
    console.log('Nueva opción seleccionada:', this.selectedOption);
  }
  
}
