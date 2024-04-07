import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

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
      editarCategoria: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]], // Aquí agregamos la expresión regular para permitir solo letras, números y espacios
      edadMin: ['', [Validators.required]],
      edadMax: ['', [Validators.required]],
    });
  }


  get editarCategoria() {
    return this.miFormulario.get('editarCategoria');
  }
  get edadMin() {
    return this.miFormulario.get('edadMin');
  }

  get edadMax() {
    return this.miFormulario.get('edadMax');
  }
  @Output() onCloseModal = new EventEmitter<void>();

 async categoriaGuardar() {
    const editarCategoria = this.miFormulario.get("editarCategoria");
   
    const edadMin = this.miFormulario.get('edadMin');
    const edadMax = this.miFormulario.get('edadMax');
     if (editarCategoria && editarCategoria.valid && edadMax && edadMin) {
      this.dateCategoria = {
        editarCategoria: editarCategoria.value,
        edadMin: edadMax.value,
        edadMax: edadMin.value,
      };
      console.log('editar de la categoría:', editarCategoria.value, edadMax.value, edadMin.value ); // Accedemos directamente al valor del FormControl
      this.onCloseModal.emit();
/* ------------------------------- */
// Convertir el objeto dateCategoria a JSON
const dataParaEnviar = JSON.stringify(this.dateCategoria);

// Utilizar fetch para enviar los datos
fetch('http://localhost:3000/categorias/replace/all/${id}', {
  method: 'PUT',
  body: dataParaEnviar,
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error( `Error en la solicitud: ${response.statusText} `);
    }
    return response.json();
  })
  .then(data => {
    console.log('Respuesta del servidor:', data);
    this.onCloseModal.emit();
    // Aquí puedes agregar la lógica para manejar la respuesta del servidor
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
    // Aquí puedes agregar la lógica para manejar el error
  });
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
