import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-eliminar-categorias',
  templateUrl: './modal-eliminar-categorias.component.html',
  styleUrls: ['./modal-eliminar-categorias.component.css'],
})
export class ModalEliminarCategoriasComponent {
  constructor(private http: HttpClient) {}
  @Input() categoryId: number | null = null; // Recibir el ID de la categoría como entrada
  data: any = {};
  eliminardatos: any = {};
  IDprueba: any = {};
  checkboxChecked = false;
  categoriaEliminar: string = '';
  error: boolean = false; // Variable para controlar si hay error
  palabraClave: string = '';

  @Output() onCloseModal = new EventEmitter<void>();
  ngOnInit() {
    this.fetchGEtCAtegorias();
    const palabraClave = this.eliminardatos.nombre;
    console.log('Editar de la categoría con ID:', this.categoryId);
  }

  guardarCambios() {
    /*⚠️⚠️ aqui cambiar 'dad' por variable de BD ⚠️⚠️ */
    console.log('Editar de la categoría con ID:', this.categoryId);

    if (this.categoriaEliminar == this.palabraClave) {
      // Aquí iría la lógica para conectar con la base de datos y eliminar la categoría
      console.log(
        'Nombre del equipo:',
        this.checkboxChecked,
        this.categoriaEliminar
      );
      /*  */
      // Utilizar fetch para enviar los datos
      this.http
        .delete<any>(
          'http://localhost:3000/categorias/delete/' + this.categoryId
        )
        .subscribe(
          (response) => {
            console.log('Respuesta del servidor:', response);
          },
          (error) => {
            console.error('Error en la solicitud:', error);
            // Agregar la lógica para manejar el error
          }
        );

      /*  */
      this.closeModal(); // Cerrar el modal después de guardar los cambios
      Swal.fire({
        position: 'top-end',
        title: 'Eliminado con éxito',
        icon: 'info',
        iconColor: 'red',
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      this.error = true; // Establecer la variable de error como verdadera
      Swal.fire({
        position: 'top-end',
        title: 'Verifica la informacion',
        icon: 'question',
        iconColor: 'orange',
        timer: 2500,
        showConfirmButton: false,
      });
    }
  }
  closeModal() {
    console.log('Modal de eliminación cerrado');
    this.onCloseModal.emit();
  }

  fetchGEtCAtegorias() {
    // Realizar la solicitud GET para obtener los datos de la tabla categorias
    this.http.get<any[]>('http://localhost:3000/categorias/receive').subscribe(
      (data) => {
        console.log('Datos de la tabla categorias:', data);
        // Filtrar los datos para incluir solo el que coincide con categoryId
        this.eliminardatos = data.find(
          (categoria: any) => categoria.id === this.categoryId
        );
        // Asignar el valor de palabraClave después de obtener los datos
        this.palabraClave = this.eliminardatos ? this.eliminardatos.nombre : '';
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
