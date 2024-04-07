import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-eliminar-categorias',
  templateUrl: './modal-eliminar-categorias.component.html',
  styleUrls: ['./modal-eliminar-categorias.component.css']
})
export class ModalEliminarCategoriasComponent implements OnInit {
  checkboxChecked = false;
  categoriaEliminar: string = '';
  error: boolean = false;
  palabraClave = { palabraclaveBD: "" };

  constructor(private http: HttpClient) {}
  
  
  ngOnInit() {
  // Agregar un console.log para mostrar el ID antes de obtener el nombre de la categoría
  console.log('ID de la categoría:', this.palabraClave.palabraclaveBD);
  
  // Obtener el nombre de la categoría basado en el ID
  this.obtenerNombreCategoria(this.palabraClave.palabraclaveBD);
}

  

  obtenerNombreCategoria(id: string) {
    this.http.get<any>('http://localhost:3000/categorias/' + id)
      .subscribe(data => {
        console.log('Datos de la categoría:', data);
        this.palabraClave.palabraclaveBD = data.nombre;
      }, error => {
        console.error('Error al obtener el nombre de la categoría:', error);
      });
  }

  @Output() onCloseModal = new EventEmitter<void>();

  guardarCambios() {
    if (this.categoriaEliminar === this.palabraClave.palabraclaveBD) {
      // Aquí iría la lógica para conectar con la base de datos y eliminar la categoría
      console.log('Nombre del equipo:', this.checkboxChecked, this.categoriaEliminar);
      this.closeModal();

      // Utilizar fetch para enviar los datos
      this.http.delete<any>('http://localhost:3000/categorias/delete/' + this.categoriaEliminar)
        .subscribe(response => {
          console.log('Respuesta del servidor:', response);
          this.onCloseModal.emit();
          Swal.fire({
            position: "top-end",
            title: 'Eliminado con éxito',
            icon: 'info',
            iconColor: 'red',
            timer: 1500,
            showConfirmButton: false,
          });
        }, error => {
          console.error('Error en la solicitud:', error);
          // Agregar la lógica para manejar el error
        });
    } else {
      this.error = true;
      Swal.fire({
        position: "top-end",
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
}
