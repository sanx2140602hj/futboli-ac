import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

interface EquipoInfo {
  equipos: string;
  botiquin: boolean;
  balones: boolean;
  gafete: boolean;
  dt: boolean;
}

@Component({
  selector: 'app-modal-partidos-evaluarequipamiento',
  templateUrl: './modal-partidos-evaluarequipamiento.component.html',
  styleUrls: ['./modal-partidos-evaluarequipamiento.component.css']
})
export class ModalPartidosEvaluarequipamientoComponent {
  @Output() onCloseModal = new EventEmitter<void>();
  equipoInfo: EquipoInfo = {
    equipos: '',
    botiquin: false,
    balones: false,
    gafete: false,
    dt: false
  };
  equipoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.equipoForm = this.fb.group({
      equipos: ['', Validators.required],
      botiquin: [false],
      balones: [false],
      gafete: [false],
      dt: [false]
    });
  }

  ngOnInit(): void {}

  onSwitchChange(id: string, event: any) {
    // Implementa el cambio de interruptor aquí
  }

  guardar() {
    if (this.equipoForm.controls['equipos'].invalid) {
      Swal.fire({
        position: 'top-end',
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de seleccionar un equipo válido',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false
      });
    } else {
      this.equipoInfo = this.equipoForm.value; // Actualiza equipoInfo con los valores del formulario
      console.log('Información de equipos:', this.equipoInfo);
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
