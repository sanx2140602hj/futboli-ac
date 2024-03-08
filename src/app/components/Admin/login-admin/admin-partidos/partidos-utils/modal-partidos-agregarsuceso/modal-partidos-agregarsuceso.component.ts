import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-partidos-agregarsuceso',
  templateUrl: './modal-partidos-agregarsuceso.component.html',
  styleUrls: ['./modal-partidos-agregarsuceso.component.css']
})
export class ModalPartidosAgregarsucesoComponent {
  @Output() onCloseModal = new EventEmitter<void>();
  miFormulario: FormGroup; // Definir el FormGroup para el formulario
  equipos: any;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      equipos: ['', Validators.required],
      seleccionarJugador: ['', Validators.required],
      seleccionarSUCESO: ['', Validators.required],
      escribaCAUSAL: ['', Validators.required] 
    });
  }

  // Método para cerrar el modal
  closeModal() {
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }

  // Método para guardar los cambios
  guardarCambios() {
    console.log('Valores del formulario:', this.miFormulario.value); // Verificar los valores del formulario

    if (this.miFormulario.valid) { // Verificar si el formulario es válido
      // Lógica para guardar los cambios
      console.log('Datos del suceso:', this.miFormulario.value);
      
      // Mostrar SweetAlert2 si se guardó correctamente
      Swal.fire({
        position: 'top-end',
        title: 'Generado con éxito',
        text: 'Cambio generado: ' + JSON.stringify(this.miFormulario.value),
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
      
      this.closeModal(); // Cerrar el modal después de guardar los cambios
    } else {
      console.log('Error: No se puede guardar el suceso debido a errores en el formulario');
      
      // Mostrar SweetAlert2 si la operación no se realizó correctamente
      Swal.fire({
        position: 'top-end',
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de que el formulario esté completo y sin errores',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false
      });
    }
  }
}
