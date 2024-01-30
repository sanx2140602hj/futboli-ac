import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalutilsequipos-eliminar',
  templateUrl: './modalutilsequipos-eliminar.component.html',
  styleUrls: ['./modalutilsequipos-eliminar.component.css']
})
export class ModalutilsequiposEliminarComponent implements OnInit {
  checkboxChecked = false;
  categoriaEliminar: string = '';

  @Output() onCloseModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {  }
  
  closeModal() {
    this.onCloseModal.emit();
  }

  guardarCambios() {
    // Lógica para guardar los cambios en el equipo
    console.log('cerrar');
    this.closeModal(); // Cerrar el modal después de guardar los cambios
  }


}
