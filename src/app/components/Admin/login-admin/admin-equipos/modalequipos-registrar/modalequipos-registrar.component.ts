import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-modalequipos-registrar',
  templateUrl: './modalequipos-registrar.component.html',
  styleUrls: ['./modalequipos-registrar.component.css']
})
export class ModalequiposRegistrarComponent{
  miFormulario: FormGroup;
  dateCategoria: any = {};
  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nuevoEquipo: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]] // Aquí agregamos la expresión regular para permitir solo letras, números y espacios

    });
  }


  get nuevoEquipo() {
    return this.miFormulario.get('nuevoEquipo');

  }
  @Output() onCloseModal = new EventEmitter<void>();

  guardarCategoria() {
    const nuevoEquipo = this.miFormulario.get("nuevoEquipo");
    if (nuevoEquipo && nuevoEquipo.valid) {
      this.dateCategoria = {
        nuevoEquipo: nuevoEquipo.value
      };
      console.log('Nombre de la categoría:', nuevoEquipo.value); // Accedemos directamente al valor del FormControl
      this.onCloseModal.emit();

      // Mostrar SweetAlert2 si se guardó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Generado con éxito',
        text: nuevoEquipo.value,
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
    this.onCloseModal.emit();
  }

}
