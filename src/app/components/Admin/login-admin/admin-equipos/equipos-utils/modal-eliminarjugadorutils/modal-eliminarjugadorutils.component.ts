import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-eliminarjugadorutils',
  templateUrl: './modal-eliminarjugadorutils.component.html',
  styleUrls: ['./modal-eliminarjugadorutils.component.css']
})
export class ModalEliminarjugadorutilsComponent implements OnInit {
  checkboxChecked = false;
  categoriaEliminar: string = '';
  error: boolean = false; // Variable para controlar si hay error

  @Output() onCloseModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {  }
  
  closeModal() {
    this.onCloseModal.emit();
  }

  guardarCambios() {
    if (this.categoriaEliminar === 'dad') {
      // Aquí iría la lógica para conectar con la base de datos y eliminar la categoría
      console.log('Nombre del equipo:', this.checkboxChecked, this.categoriaEliminar);
      this.closeModal(); // Cerrar el modal después de guardar los cambios
    } else {
      this.error = true; // Establecer la variable de error como verdadera
    }
  }
}
