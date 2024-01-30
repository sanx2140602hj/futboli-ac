import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalutilsequipos-registrodelpresidente',
  templateUrl: './modalutilsequipos-registrodelpresidente.component.html',
  styleUrls: ['./modalutilsequipos-registrodelpresidente.component.css']
})
export class ModalutilsequiposRegistrodelpresidenteComponent implements OnInit {
// Evento de salida para notificar el cierre del modal al componente padre
@Output() onCloseModal = new EventEmitter<void>();
constructor() { }

ngOnInit(): void {
}
// Método para cerrar el modal y emitir el evento al componente padre
closeModal() {
  console.log('Modal cerrado'); // ⚠️ Se muestra un log en la consola
  this.onCloseModal.emit(); // ⚠️ Se emite el evento para notificar el cierre del modal al componente padre dentro de modal-nuevacategorias.component.ts
}
guardarCambios() {
  // Lógica para guardar los cambios en el equipo
  console.log('Nombre del equipo:');
  this.closeModal(); // Cerrar el modal después de guardar los cambios
}
}
