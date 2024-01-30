import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalequipos-eliminar',
  templateUrl: './modalequipos-eliminar.component.html',
  styleUrls: ['./modalequipos-eliminar.component.css']
})
export class ModalequiposEliminarComponent implements OnInit {
  checkboxChecked = false;
  categoriaEliminar: string = '';

  @Output() onCloseModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  
  closeModal() {
    this.onCloseModal.emit();
  }

  guardarCambios() {
    // Lógica para guardar los cambios en el equipo
    console.log('Nombre del equipo:');
    this.closeModal(); // Cerrar el modal después de guardar los cambios
  }


}