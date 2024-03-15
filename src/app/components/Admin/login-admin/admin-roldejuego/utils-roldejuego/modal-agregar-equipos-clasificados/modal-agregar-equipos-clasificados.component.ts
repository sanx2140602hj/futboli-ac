import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-agregar-equipos-clasificados',
  templateUrl: './modal-agregar-equipos-clasificados.component.html',
  styleUrls: ['./modal-agregar-equipos-clasificados.component.css']
})
export class ModalAgregarEquiposClasificadosComponent {
  miFormulario: FormGroup;
  dateCategoria: any = {};
  rangoEquipos: number = 1; // Variable para almacenar el rango seleccionado inicialmente

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      equipoClasificados: ['', [Validators.required]] // Modificación en la validación
    });
  }

  get equipoClasificados() {
    return this.miFormulario.get('equipoClasificados');
  }

  @Output() onCloseModal = new EventEmitter<void>();

  guardarCategoria() {
    const equipoClasificados = this.miFormulario.get("equipoClasificados");
    if (equipoClasificados && equipoClasificados.valid) {
      this.dateCategoria = {
        equipoClasificados: equipoClasificados.value
      };
      console.log('Nombre de la categoría:', equipoClasificados.value);
      this.onCloseModal.emit();

      // Mostrar SweetAlert2 si se guardó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Generado con éxito',
        text: "Numero de torneros seleccionado es: "+ equipoClasificados.value,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      console.log('Error: No se puede guardar la categoría debido a errores en el formulario');

      // Mostrar SweetAlert2 si la operación no se realizó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'Por favor, Mueva la barra para seleccionar un numero',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,
      });
    }
  }

  closeModal() {
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }

  // Método para manejar el cambio en el rango
  onRangeChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.rangoEquipos = parseInt(inputElement.value);
  }
}
