import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalequipos-eliminar',
  templateUrl: './modalequipos-eliminar.component.html',
  styleUrls: ['./modalequipos-eliminar.component.css']
})
export class ModalequiposEliminarComponent implements OnInit {
  checkboxChecked = false;
  categoriaEliminar: string = '';
  error: boolean = false; // Variable para controlar si hay error

  @Output() onCloseModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  
  closeModal() {
    this.onCloseModal.emit();
  }

  guardarCambios() { /*⚠️⚠️ aqui cambiar 'dad' por variable de BD ⚠️⚠️ */
    if (this.categoriaEliminar === 'dad') {
      // Aquí iría la lógica para conectar con la base de datos y eliminar la categoría
      console.log('Nombre del equipo:', this.checkboxChecked, this.categoriaEliminar);
      this.closeModal(); // Cerrar el modal después de guardar los cambios
    } else {
      this.error = true; // Establecer la variable de error como verdadera
    }
  }
}
