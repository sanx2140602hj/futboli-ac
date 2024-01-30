import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalequipos-editar',
  templateUrl: './modalequipos-editar.component.html',
  styleUrls: ['./modalequipos-editar.component.css']
})
export class ModalequiposEditarComponent implements OnInit {
  @Output() onCloseModal = new EventEmitter<void>();

  equipoNombre: string = ''; // Propiedad para almacenar el nombre del equipo

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.onCloseModal.emit();
    }

  guardarCambios() {
    // Lógica para guardar los cambios en el equipo
    console.log('Nombre del equipo:', this.equipoNombre);
    this.closeModal(); // Cerrar el modal después de guardar los cambios
  }
}
