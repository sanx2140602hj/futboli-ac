import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal-descripcioncategorias',
  templateUrl: './modal-descripcioncategorias.component.html',
  styleUrls: ['./modal-descripcioncategorias.component.css']
})
export class ModalDescripcioncategoriasComponent {
  comentario: string = '';
  
  miFormulario: FormGroup;
  dateCategoria: any = {};
  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      comentarCategoria: ['', [Validators.required]] // Aquí agregamos la expresión regular para permitir solo letras, números y espacios

    });
  }


  get comentarCategoria() {
    return this.miFormulario.get('comentarCategoria');

  }
  @Output() onCloseModal = new EventEmitter<void>();

  guardarModal() {
    const comentarCategoria = this.miFormulario.get("comentarCategoria");
    if (comentarCategoria && comentarCategoria.valid) {
      this.dateCategoria = {
        comentarCategoria: comentarCategoria.value
      };
      console.log('editar de la categoría:', comentarCategoria.value); // Accedemos directamente al valor del FormControl
      this.onCloseModal.emit();

      // Mostrar SweetAlert2 si se guardó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Comentario generado con éxito',
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
        text: 'Por favor, asegúrese de que el comentario esté completo',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,

      });
    }
  }

  
  
  
  closeModal() {
    console.log('Modal de descripción cerrado');
    this.onCloseModal.emit();
  }
}
