import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-descripcioncategorias',
  templateUrl: './modal-descripcioncategorias.component.html',
  styleUrls: ['./modal-descripcioncategorias.component.css']
})
export class ModalDescripcioncategoriasComponent {
  @Input() categoryId: number | null = null; // Recibir el ID de la categoría como entrada
  comentario: string = '';
  data: any = {};
  editarDatos: any = {};
  IDprueba: any = {};
  miFormulario: FormGroup;
  dateDescription: any = {};
/*  */
  error: boolean = false; // Variable para controlar si hay error
  palabraClave: string = ''



  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.miFormulario = this.fb.group({
comentarCategoria: ['', [Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9 .,]*$/)]]
 
    });
  }
  ngOnInit() {
    console.log('Editar de la categoría con ID:', this.categoryId);
    this.fetchGEtCAtegorias();
  }

  get comentarCategoria() {
    return this.miFormulario.get('comentarCategoria');

  }
  @Output() onCloseModal = new EventEmitter<void>();
  guardarModal() {
    const comentarCategoria = this.miFormulario.get("comentarCategoria");
    if (comentarCategoria && comentarCategoria.valid) {
      const descripcion = comentarCategoria.value; // Obtener el valor del FormControl
      const id = this.categoryId;
      const data = {
        description: descripcion
      };
      const description = JSON.stringify(data);
      const IDprueba = JSON.stringify(id);

      // Utilizar fetch para enviar los datos
      fetch(`http://localhost:3000/categorias/replace/description/${IDprueba}`, {
        method: 'POST', // Cambiado a POST en lugar de PATCH
        body: description,
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
          // Aquí puedes agregar la lógica para manejar la respuesta del servidor
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error);
          // Aquí puedes agregar la lógica para manejar el error
        });

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
      // Asignar la descripción al campo comentario
      this.comentario = this.editarDatos ? this.editarDatos.description : '';
    },
    (error) => {
      console.error('Error en la solicitud:', error);
    }
  );
}
  
  closeModal() {
    console.log('Modal de descripción cerrado');
    this.onCloseModal.emit();
  }
}
