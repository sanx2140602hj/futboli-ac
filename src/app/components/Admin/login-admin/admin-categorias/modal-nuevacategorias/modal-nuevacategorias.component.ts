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
      edadMin: ['', [Validators.required, Validators.pattern(/^(?:[1-9]|[1-9][0-9])$/)]], // Valida que sea un número entre 1 y 99
      edadMax: ['', [Validators.required, Validators.pattern(/^(?:[1-9]|[1-9][0-9])$/)]], // Valida que sea un número entre 1 y 99
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
  
    // Validar que los campos de edad sean números enteros positivos
    if (edadMin && edadMax && !isNaN(edadMin.value) && !isNaN(edadMax.value) &&
        Number.isInteger(edadMin.value) && Number.isInteger(edadMax.value) &&
        edadMin.value >= 1 && edadMax.value >= edadMin.value+1) 
        //en caso de algun ajuste de edad el +1 es para intervenir el rango de edades en las categorias
      //es decir que el renga actual es de 15 a 16 por ejemplo siendo un año en el rango de edades.
        {
      // Verificar que la edad mínima sea menor que la edad máxima
      if (edadMin.value <= edadMax.value) {
        if (nombre && nombre.valid) {
          // Crear el objeto de categoría
          this.dateCategoria = {
            nombre: nombre.value,
            edadMin: edadMin.value,
            edadMax: edadMax.value,
          };
  
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
            // Mostrar SweetAlert2 si se guardó correctamente
            Swal.fire({
              position: "top-end",
              title: 'Generado con éxito',
              text: nombre.value,
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });
          })
          .catch(error => {
            console.error('Error en la solicitud:', error);
            // Mostrar SweetAlert2 si hay un error en la solicitud
            Swal.fire({
              position: "top-end",
              title: 'Operación no realizada',
              text: 'Error en la solicitud al servidor',
              icon: 'error',
              timer: 2500,
              showConfirmButton: false
            });
          });
        } else {
          console.log('Error: Nombre de categoría inválido');
        }
      } else {
        console.log('Error: La edad mínima debe ser menor o igual que la edad máxima');
        // Mostrar SweetAlert2 si la edad mínima es mayor que la edad máxima
        Swal.fire({
          position: "top-end",
          title: 'Operación no realizada',
          text: 'La edad mínima debe ser menor o igual que la edad máxima',
          icon: 'error',
          timer: 2500,
          showConfirmButton: false
        });
      }
    } else {
      console.log('Error: Los campos de edad deben ser números enteros positivos');
      // Mostrar SweetAlert2 si los campos de edad no son números enteros positivos
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'Los campos de edad deben ser números enteros positivos',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false
      });
    }
  }
  

  closeModal() {
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }
}
