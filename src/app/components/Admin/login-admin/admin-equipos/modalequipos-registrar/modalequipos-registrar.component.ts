import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalequipos-registrar',
  templateUrl: './modalequipos-registrar.component.html',
  styleUrls: ['./modalequipos-registrar.component.css']
})
export class ModalequiposRegistrarComponent implements OnInit {
  @Output() onCloseModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.onCloseModal.emit();
  }

  guardarEquipo() {
    // Lógica para guardar el equipo
    console.log('Equipo guardado');
    this.closeModal();
  }
}
