import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-modal-editar-categorias',
  templateUrl: './modal-editar-categorias.component.html',
  styleUrls: ['./modal-editar-categorias.component.css']
})
export class ModalEditarCategoriasComponent {
  miFormulario: FormGroup;
  dateCategoria: any = {};
  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      editarCategoria: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]] // Aquí agregamos la expresión regular para permitir solo letras, números y espacios

    });
  }


  get editarCategoria() {
    return this.miFormulario.get('editarCategoria');

  }
  @Output() onCloseModal = new EventEmitter<void>();

  editarCategoriaGuardar() {
    const editarCategoria = this.miFormulario.get("editarCategoria");
    if (editarCategoria && editarCategoria.valid) {
      this.dateCategoria = {
        editarCategoria: editarCategoria.value
      };
      console.log('editar de la categoría:', editarCategoria.value); // Accedemos directamente al valor del FormControl
      this.onCloseModal.emit();

      // Mostrar SweetAlert2 si se guardó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Cambio generado con éxito',
        text: editarCategoria.value,
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
}
