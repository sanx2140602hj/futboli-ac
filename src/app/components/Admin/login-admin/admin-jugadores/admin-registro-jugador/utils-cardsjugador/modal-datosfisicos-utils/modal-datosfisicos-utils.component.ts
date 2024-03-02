import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-datosfisicos-utils',
  templateUrl: './modal-datosfisicos-utils.component.html',
  styleUrls: ['./modal-datosfisicos-utils.component.css']
})
export class ModalDatosfisicosUtilsComponent implements OnInit {
  miFormulario: FormGroup;
  datoFisico: any;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      estatura: ['', [Validators.required, Validators.pattern('^[0-9.]+$')]],
      peso: ['', [Validators.required, Validators.pattern('^[0-9.]+$')]],
      tipoSangre: ['', Validators.required]
    });
    this.datoFisico = {};
  }

  ngOnInit(): void {
  }

  get estatura() {
    return this.miFormulario.get('estatura');
  }

  get peso() {
    return this.miFormulario.get('peso');
  }

  get tipoSangre() {
    return this.miFormulario.get('tipoSangre');
  }

  guardarInformacion() {
    if (this.miFormulario.valid) {
      const estatura = this.estatura;
      const peso = this.peso;
      const tipoSangre = this.tipoSangre;
  
      if (estatura && peso && tipoSangre) {
        this.datoFisico = {
          estatura: estatura.value,
          peso: peso.value,
          tipoSangre: tipoSangre.value
        };
  
        console.log('Dato Físico', this.datoFisico);
      }
    } else {
      console.error('El formulario no es válido.');
    }
  }
  
}
