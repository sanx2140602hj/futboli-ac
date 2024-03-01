import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-modalequipos-editar',
  templateUrl: './modalequipos-editar.component.html',
  styleUrls: ['./modalequipos-editar.component.css']
})
export class ModalequiposEditarComponent {
  miFormulario: FormGroup;
  dateCategoria: any = {};
  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      equipoNombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]] // Aquí agregamos la expresión regular para permitir solo letras, números y espacios

    });
  }

  get equipoNombre() {
    return this.miFormulario.get('equipoNombre');

  }
  @Output() onCloseModal = new EventEmitter<void>();

  equipoNombreGuardar() {
    const equipoNombre = this.miFormulario.get("equipoNombre");
    if (equipoNombre && equipoNombre.valid) {
      this.dateCategoria = {
        equipoNombre: equipoNombre.value
      };
      console.log('editar de la categoría:', equipoNombre.value); // Accedemos directamente al valor del FormControl
      this.onCloseModal.emit();

      // Mostrar SweetAlert2 si se guardó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Cambio generado con éxito',
        text: equipoNombre.value,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,

      });
    } else {
      console.log('Error: No se puede guardar la categoría debido a errores en el formulario');

      // Mostrar SweetAlert2 si la operación no se realizó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de que el formulario esté completo y sin errores',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,

      });
    }
  }



  closeModal() {
    console.log('Modal de edición cerrado');
    this.onCloseModal.emit();
  }


  guardarCambios() {
    // Lógica para guardar los cambios en el equipo
    console.log('Nombre del equipo:', this.equipoNombre);
    this.closeModal(); // Cerrar el modal después de guardar los cambios
  }
}
