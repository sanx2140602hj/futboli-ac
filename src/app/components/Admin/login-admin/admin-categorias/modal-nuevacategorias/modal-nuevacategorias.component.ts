import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal-nuevacategorias',
  templateUrl: './modal-nuevacategorias.component.html',
  styleUrls: ['./modal-nuevacategorias.component.css']
})
export class ModalNuevacategoriasComponent {
  miFormulario: FormGroup;
  dateCategoria: any = {};
  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombreCategoria: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]] // Aquí agregamos la expresión regular para permitir solo letras, números y espacios

    });
  }


  get nombreCategoria() {
    return this.miFormulario.get('nombreCategoria');

  }
  @Output() onCloseModal = new EventEmitter<void>();

  guardarCategoria() {
    const nombreCategoria = this.miFormulario.get("nombreCategoria");
    if (nombreCategoria && nombreCategoria.valid) {
      this.dateCategoria = {
        nombreCategoria: nombreCategoria.value
      };
      console.log('Nombre de la categoría:', nombreCategoria.value); // Accedemos directamente al valor del FormControl
      this.onCloseModal.emit();

      // Mostrar SweetAlert2 si se guardó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Generado con éxito',
        text: nombreCategoria.value,
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
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }
}
