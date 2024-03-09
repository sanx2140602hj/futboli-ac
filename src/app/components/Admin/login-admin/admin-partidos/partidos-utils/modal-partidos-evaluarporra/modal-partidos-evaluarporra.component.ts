import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
``
interface PorraInfo {
  equipo: string;
  porra: string;
}

@Component({
  selector: 'app-modal-partidos-evaluarporra',
  templateUrl: './modal-partidos-evaluarporra.component.html',
  styleUrls: ['./modal-partidos-evaluarporra.component.css']
})
export class ModalPartidosEvaluarporraComponent {
  @Output() onCloseModal = new EventEmitter<void>();
  porraInfo: PorraInfo = {
    equipo: '',
    porra: ''
  };
  porraForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.porraForm = this.fb.group({
      equipo: ['', Validators.required],
      porra: ['', Validators.required]
    });
  }

  guardar() {
    if (this.porraForm.invalid) {
      Swal.fire({
        position: 'top-end',
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de que el formulario esté completo y sin errores',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false
      });
    } else {
      this.porraInfo.equipo = this.porraForm.value.equipo;
      this.porraInfo.porra = this.porraForm.value.porra;

      console.log('Información de la porra:', this.porraInfo);
      Swal.fire({
        position: 'top-end',
        title: 'Generado con éxito',
        text: 'Generado con éxito',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
      this.onCloseModal.emit();
    }
  }


  closeModal() {
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }
}
