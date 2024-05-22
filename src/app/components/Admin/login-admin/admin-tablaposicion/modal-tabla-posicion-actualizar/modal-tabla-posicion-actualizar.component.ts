import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-modal-tabla-posicion-actualizar',
  templateUrl: './modal-tabla-posicion-actualizar.component.html',
  styleUrls: ['./modal-tabla-posicion-actualizar.component.css']
})
export class ModalTablaPosicionActualizarComponent implements OnInit {
  @Input() categoryId: number | null = null; // Recibir el ID de la categoría como entrada
  comentario: string = '';
  data: any = {};
  editarDatos: any = {};
  IDprueba: any = {};
  miFormulario: FormGroup;
  dateDescription: any = {};
  error: boolean = false; // Variable para controlar si hay error
  palabraClave: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.miFormulario = this.fb.group({
      goleo: [0, [Validators.required, Validators.min(0)]],
      amonestacion: [0, [Validators.required, Validators.min(0)]],
      tarjetaRoja: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
  }
  get goleo() {
    return this.miFormulario.get('goleo');
  }

  get amonestacion() {
    return this.miFormulario.get('amonestacion');
  }

  get tarjetaRoja() {
    return this.miFormulario.get('tarjetaRoja');
  }

  @Output() onCloseModal = new EventEmitter<void>();
  guardarModal() {
    console.log("Hola");
  }


  closeModal() {
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }
}
