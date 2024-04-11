import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-editar-categorias',
  templateUrl: './modal-editar-categorias.component.html',
  styleUrls: ['./modal-editar-categorias.component.css'],
})
export class ModalEditarCategoriasComponent implements OnInit {
  @Input() categoryId: number | null = null; // Recibir el ID de la categoría como entrada
  data: any = {};
  editarDatos: any = {};
  categoriaEliminar: string = '';
  error: boolean = false; // Variable para controlar si hay error
  palabraClave: string = ''
  miFormulario: FormGroup;
  dateCategoria: any = {};
  IDprueba: any = {};

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.miFormulario = this.fb.group({
      editarCategoria: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')],
      ], // Aquí agregamos la expresión regular para permitir solo letras, números y espacios
      edadMin: [
        '',
        [Validators.required, Validators.pattern(/^(?:[1-9]|[1-9][0-9])$/)],
      ], // Valida que sea un número entre 1 y 99
      edadMax: [
        '',
        [Validators.required, Validators.pattern(/^(?:[1-9]|[1-9][0-9])$/)],
      ], // Valida que sea un número entre 1 y 99
    });
  }

  ngOnInit() {
    console.log('Editar de la categoría con ID:', this.categoryId);
    const palabraClave = this.editarDatos.nombre;
    this.fetchGEtCAtegorias();

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
    const editarCategoria = this.miFormulario.get('editarCategoria');

    const edadMin = this.miFormulario.get('edadMin');
    const edadMax = this.miFormulario.get('edadMax');
    if (
      edadMin &&
      edadMax &&
      !isNaN(edadMin.value) &&
      !isNaN(edadMax.value) &&
      Number.isInteger(edadMin.value) &&
      Number.isInteger(edadMax.value) &&
      edadMin.value >= 1 &&
      edadMax.value >= edadMin.value + 1
    ) {
      //en caso de algun ajuste de edad el +1 es para intervenir el rango de edades en las categorias
      //es decir que el renga actual es de 15 a 16 por ejemplo siendo un año en el rango de edades.
      if (editarCategoria && editarCategoria.valid && edadMax && edadMin) {
        this.dateCategoria = {
          nombre: editarCategoria.value,
          edadMin: edadMin.value,
          edadMax: edadMax.value,
        };
        console.log(
          'editar de la categoría:',
          editarCategoria.value,
          'edadMAX: ',
          edadMax.value,
          'EdadMin: ',
          edadMin.value
        ); // Accedemos directamente al valor del FormControl
        console.log('Editar de la categoría con ID:', this.categoryId);
        this.onCloseModal.emit();
        /* ------------------------------- */

        // Convertir el objeto dateCategoria a JSON
        const id = this.categoryId;

        const dataParaEnviar = JSON.stringify(this.dateCategoria);
        const IDprueba = JSON.stringify(id);

        // Utilizar fetch para enviar los datos
        fetch(`http://localhost:3000/categorias/replace/all/${IDprueba}`, {
          method: 'PUT',
          body: dataParaEnviar,
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Error en la solicitud: ${response.statusText} `);
            }
            return response.json();
          })
          .then((data) => {
            console.log('Respuesta del servidor:', data);
            this.onCloseModal.emit();
            // Aquí puedes agregar la lógica para manejar la respuesta del servidor
          })
          .catch((error) => {
            console.error('Error en la solicitud:', error);
            // Aquí puedes agregar la lógica para manejar el error
          });

        // Mostrar SweetAlert2 si se guardó correctamente
        Swal.fire({
          position: 'top-end',
          title: 'Cambio generado con éxito',
          text: editarCategoria.value + edadMax.value + edadMin.value,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } else {
      console.log(
        'Error: No se puede guardar la categoría debido a errores en el formulario'
        
      );

      // Mostrar SweetAlert2 si la operación no se realizó correctamente
      Swal.fire({
        position: 'top-end',
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
  
  fetchGEtCAtegorias() {
    // Realizar la solicitud GET para obtener los datos de la tabla categorias
    this.http.get<any[]>('http://localhost:3000/categorias/receive').subscribe(
      (data) => {
        console.log('Datos de la tabla categorias:', data);
        // Filtrar los datos para incluir solo el que coincide con categoryId
        this.editarDatos = data.find(
          (categoria: any) => categoria.id === this.categoryId
        );
        // Asignar el valor de palabraClave después de obtener los datos
        this.palabraClave = this.editarDatos ? this.editarDatos.nombre : '';
        this.miFormulario.patchValue({
          editarCategoria: this.editarDatos.nombre,
          edadMin: this.editarDatos.edadMin,
          edadMax: this.editarDatos.edadMax
        });
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
