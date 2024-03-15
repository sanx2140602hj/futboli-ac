import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-editar-infoequipos',
  templateUrl: './modal-editar-infoequipos.component.html',
  styleUrls: ['./modal-editar-infoequipos.component.css']
})
export class ModalEditarInfoequiposComponent {
  miFormulario: FormGroup;
  datePartido: any = {};

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      lugarPartido: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      fechaPartido: ['', [Validators.required]],
      finalPartido: ['', [Validators.required]],
    });
  }

  get lugarPartido() {
    return this.miFormulario.get('lugarPartido');
  }

  @Output() onCloseModal = new EventEmitter<void>();

  Guardar() {
    const lugarPartido = this.miFormulario.get('lugarPartido');
  const fechaPartido = this.miFormulario.get('fechaPartido');
  const finalPartido = this.miFormulario.get('finalPartido');

    if (lugarPartido && lugarPartido.valid && fechaPartido && finalPartido && fechaPartido.valid && finalPartido.valid) {
      this.datePartido = {
        lugarPartido: lugarPartido.value,
        fechaPartido: fechaPartido.value,
        finalPartido: finalPartido.value
      };

      console.log('Datos del partido:', this.datePartido); // Enviamos los datos del partido a la consola
      this.onCloseModal.emit();

      // Mostrar SweetAlert2 si se guardó correctamente
      const mensaje = `Lugar: ${this.datePartido.lugarPartido}<br>
               Fecha: ${this.datePartido.fechaPartido}<br>
               final: ${this.datePartido.finalPartido}`;
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
