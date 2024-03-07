import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-partidos-agregardatos',
  templateUrl: './modal-partidos-agregardatos.component.html',
  styleUrls: ['./modal-partidos-agregardatos.component.css'],
})
export class ModalPartidosAgregardatosComponent {
  miFormulario: FormGroup;
  datePartido: any = {};

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      lugarPartido: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      fechaPartido: ['', [Validators.required]],
      horaPartido: ['', [Validators.required]],
    });
  }

  get lugarPartido() {
    return this.miFormulario.get('lugarPartido');
  }

  @Output() onCloseModal = new EventEmitter<void>();

  Guardar() {
    const lugarPartido = this.miFormulario.get('lugarPartido');
  const fechaPartido = this.miFormulario.get('fechaPartido');
  const horaPartido = this.miFormulario.get('horaPartido');

    if (lugarPartido && lugarPartido.valid && fechaPartido && horaPartido && fechaPartido.valid && horaPartido.valid) {
      this.datePartido = {
        lugarPartido: lugarPartido.value,
        fechaPartido: fechaPartido.value,
        horaPartido: horaPartido.value
      };

      console.log('Datos del partido:', this.datePartido); // Enviamos los datos del partido a la consola
      this.onCloseModal.emit();

      // Mostrar SweetAlert2 si se guardó correctamente
      const mensaje = `Lugar: ${this.datePartido.lugarPartido}<br>
               Fecha: ${this.datePartido.fechaPartido}<br>
               Hora: ${this.datePartido.horaPartido}`;
      Swal.fire({
        position: "top-end",
        title: 'Generado con éxito',
        html: mensaje,
        icon: 'success',
        timer: 2500,
        showConfirmButton: false,
      });
    } else {
      console.log('Error: No se puede guardar el partido debido a errores en el formulario');

      // Mostrar SweetAlert2 si la operación no se realizó correctamente
      Swal.fire({
        position: 'top-end',
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de que el formulario esté completo y sin errores',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,
      });
    }
  }

  closeModal() {
    console.log('Modal de edición cerrado');
    this.onCloseModal.emit();
  }
}
