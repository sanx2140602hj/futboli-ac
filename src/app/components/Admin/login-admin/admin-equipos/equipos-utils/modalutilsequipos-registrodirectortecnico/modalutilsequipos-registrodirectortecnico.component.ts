import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalutilsequipos-registrodirectortecnico',
  templateUrl: './modalutilsequipos-registrodirectortecnico.component.html',
  styleUrls: ['./modalutilsequipos-registrodirectortecnico.component.css']
})
export class ModalutilsequiposRegistrodirectortecnicoComponent implements OnInit {
  @Output() onCloseModal = new EventEmitter<void>();
  dirTec: string = '';
  nuevaOpcion: string = '';
  selectedOption: string = '';

  dirTecControl = new FormControl('', [Validators.pattern('^[a-zA-Z0-9ñ ]*$')]);
  nuevaOpcionControl = new FormControl('', [Validators.pattern('^[a-zA-Z0-9ñ ]*$')]);

  constructor() { }

  agregarOpcion() {
    if (this.nuevaOpcion.trim() !== '') {
      this.selectedOption = this.nuevaOpcion;
      this.nuevaOpcion = '';
    } else {
      console.error('Error: Debe ingresar un valor para la nueva opción.');
    }
  }

  ngOnInit(): void {
  }

  closeModal() {
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }

  guardarCambios() {
    const nombreValido = this.dirTecControl.valid;
    const nuevaOpcionValida = this.nuevaOpcionControl.valid;

    if (!nombreValido || !nuevaOpcionValida ) {
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de que el formulario esté completo y sin errores',
        icon: 'error',
        timer: 2501,
        showConfirmButton: false,
      });
      console.error('Error: Todos los campos son requeridos o contienen valores inválidos.');
      return;
    }

    const mensaje = this.selectedOption !== '' ? this.selectedOption : this.nuevaOpcion;

    Swal.fire({
      position: "top-end",
      title: 'Generado con éxito',
      text: `Nombre del director técnico: ${this.dirTec} - Cargo: ${mensaje}`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });

    this.closeModal();
  }

  
  opcionSeleccionada() {
    if (this.selectedOption !== 'NuevaOpcion') {
      console.log('La opción seleccionada es válida');
      return;
    }

    const nuevaOpcionValida = this.nuevaOpcion.trim() !== '';

    if ( nuevaOpcionValida) {
      console.log('La opción seleccionada es válida');
      if ( nuevaOpcionValida) {
        Swal.fire({
          position: "top-end",
          title: 'Opción agregada con éxito',
          text: `Nueva opción: ${this.nuevaOpcion}`,
          icon: 'success',
          timer: 2500,
          showConfirmButton: false
        });
      }
      return;
    }

    Swal.fire({
      position: "top-end",
      title: 'Seleccion de otra categoria',
      text: 'En caso que no desee añadir un nuevo campo cierre esta ventana',
      icon: 'info',
      timer: 3500,
    });
  }
}
