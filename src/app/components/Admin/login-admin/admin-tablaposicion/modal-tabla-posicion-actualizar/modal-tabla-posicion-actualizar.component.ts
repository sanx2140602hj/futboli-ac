import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-tabla-posicion-actualizar',
  templateUrl: './modal-tabla-posicion-actualizar.component.html',
  styleUrls: ['./modal-tabla-posicion-actualizar.component.css']
})
export class ModalTablaPosicionActualizarComponent implements OnInit {
  miFormulario: FormGroup;


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.miFormulario = this.fb.group({
      goleo: [0, [Validators.required, this.validateNumber]],
      amonestacion: [0, [Validators.required, this.validateNumber]],
      tarjetaRoja: [0, [Validators.required, this.validateNumber]]
    });
  }

  ngOnInit(): void {
  }

  validateNumber(control: AbstractControl) {
    const value = control.value;
    if (isNaN(value) || !Number.isInteger(value) || value < 1 || value > 99) {
      return { invalidNumber: true };
    }
    return null;
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
    if (this.miFormulario.valid) {
      const goleo = this.miFormulario.value.goleo;
      const amonestacion = this.miFormulario.value.amonestacion;
      const tarjetaRoja = this.miFormulario.value.tarjetaRoja;

      console.log("Valores ingresados:", "Goleo: ",goleo, "Amonestacion: ",amonestacion, "tarjetaRoja: ",tarjetaRoja);


    } else {
      // Mostrar mensaje de error si el formulario no es válido
      Swal.fire('Error', 'Por favor, completa el formulario correctamente', 'error');
    }
  }

  closeModal() {
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }
}
