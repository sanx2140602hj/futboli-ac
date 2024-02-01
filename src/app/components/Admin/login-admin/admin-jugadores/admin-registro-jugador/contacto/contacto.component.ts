import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  miFormulario: FormGroup;
  contacto: any; // Objeto para almacenar la información

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      calle: ['', Validators.required],
      numero: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      colonia: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      ciudad: ['', [Validators.required]],
      codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
    this.contacto = {}; // Inicializa el objeto para almacenar la información
  }

  ngOnInit(): void {
  }

  get tel() {
    return this.miFormulario.get('telefono');
  }
  
  get calle() {
    return this.miFormulario.get('calle');
  }
  
  get numero() {
    return this.miFormulario.get('numero');
  }
  
  get colonia() {
    return this.miFormulario.get('colonia');
  }
  
  get ciudad() {
    return this.miFormulario.get('ciudad');
  }
  
  get codigo() {
    return this.miFormulario.get('codigoPostal');
  }

  guardarInformacion() {
    if (this.miFormulario.valid) {
      const telefono = this.tel;
      const calle = this.calle;
      const numero = this.numero;
      const colonia = this.colonia;
      const ciudad = this.ciudad;
      const codigoPostal = this.codigo;
  
      if (telefono && calle && numero && colonia && ciudad && codigoPostal) {
        this.contacto = {
          telefono: telefono.value,
          calle: calle.value,
          numero: numero.value,
          colonia: colonia.value,
          ciudad: ciudad.value,
          codigoPostal: codigoPostal.value
        };
  
        console.log('Contacto', this.contacto);
      } else {
        console.error('Algunas propiedades del formulario son null o undefined.');
      }
    } else {
      console.error('El formulario no es válido.');
    }
  }
  }
