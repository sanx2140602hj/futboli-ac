import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-identificacion-utils',
  templateUrl: './modal-identificacion-utils.component.html',
  styleUrls: ['./modal-identificacion-utils.component.css']
})
export class ModalIdentificacionUtilsComponent implements OnInit {
  miFormulario: FormGroup;
  Identifiacion: any; // Objeto para almacenar la información


  @Output() onCloseModal = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      folio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      equipo: ['', Validators.required],  // Agrega formControl para el campo "equipo"
      archivo: ['']  // Agrega formControl para el campo "archivo"
    }); this.Identifiacion = {}; // Inicializa el objeto datosPersonales
  }

  ngOnInit(): void {
  }
  get folio() {
    return this.miFormulario.get('folio');
  }
  
  get equipo() {
    return this.miFormulario.get('equipo');
  }

  get archivo() {
    return this.miFormulario.get('archivo');
  }
  guardarInformacion() {
    const folio = this.miFormulario.get('folio');
    const equipo = this.miFormulario.get('equipo');
    const archivo = this.miFormulario.get('archivo');

    if (folio && equipo && archivo) {
      this.Identifiacion = {
        folio: folio.value,
        equipo: equipo.value,
        archivo: archivo.value
      };

      console.log('Identifiacion', this.Identifiacion);
    } else {
      console.error('Algunas propiedades son null o undefined.');
    }
  }

}
