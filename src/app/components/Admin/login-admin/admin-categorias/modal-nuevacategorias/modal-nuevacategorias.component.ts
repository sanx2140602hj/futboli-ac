import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-nuevacategorias',
  templateUrl: './modal-nuevacategorias.component.html',
  styleUrls: ['./modal-nuevacategorias.component.css'],
})
export class ModalNuevacategoriasComponent {
  miFormulario: FormGroup;
  dateCategoria: any = {};
  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombre: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')],
      ], // Aquí agregamos la expresión regular para permitir solo letras, números y espacios
      edadMin: ['', [Validators.required]],
      edadMax: ['', [Validators.required]],
    });
  }

  get nombre() {
    return this.miFormulario.get('nombre');
  }
  get edadMin() {
    return this.miFormulario.get('edadMin');
  }

  get edadMax() {
    return this.miFormulario.get('edadMax');
  }
  @Output() onCloseModal = new EventEmitter<void>();

  guardarCategoria() {
    const nombre = this.miFormulario.get('nombre');
    const edadMin = this.miFormulario.get('edadMin');
    const edadMax = this.miFormulario.get('edadMax');
    if (nombre && nombre.valid && edadMax && edadMin) {
      this.dateCategoria = {
        nombre: nombre.value,
        edadMin: edadMax.value,
        edadMax: edadMin.value,
      };
      console.log('Nombre de la categoría:', nombre.value, edadMax.value, edadMin.value ); // Accedemos directamente al valor del FormControl

      // Convertir el objeto dateCategoria a JSON
      const dataParaEnviar = JSON.stringify(this.dateCategoria);

      // Utilizar fetch para enviar los datos
      fetch('http://localhost:3000/categorias/new', {
        method: 'POST',
        body: dataParaEnviar,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
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
  title: 'Generado con éxito',
  text: nombre.value,
  icon: 'success',
  timer: 1500,
  showConfirmButton: false,
  
});
this.onCloseModal.emit();
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


});}
  }

  closeModal() {
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }
}
