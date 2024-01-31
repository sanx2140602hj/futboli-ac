import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  miFormulario: FormGroup;
  datosPersonales: any; // Objeto para almacenar la información

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
      apellidoPaterno: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
      apellidoMaterno: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
      edad:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Fecha: ['',[Validators.required]],
      curp: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
    });

    this.datosPersonales = {}; // Inicializa el objeto datosPersonales
  }

  ngOnInit(): void {
    // Inicializaciones adicionales si es necesario
  }

  get nombre() {
    return this.miFormulario.get('nombre');
  }

  get apellidoPaterno() {
    return this.miFormulario.get('apellidoPaterno');
  }

  get apellidoMaterno() {
    return this.miFormulario.get('apellidoMaterno');
  }

  get edad(){
    return this.miFormulario.get('edad')
  }

  get Fecha(){
    return this.miFormulario.get('Fecha')
  }

  get curp(){
    return this.miFormulario.get('curp')
  }

  // Método para guardar la información
  guardarInformacion() {
    // Utiliza el método get directamente para evitar verificaciones de null o undefined
    const nombre = this.miFormulario.get('nombre');
    const apellidoPaterno = this.miFormulario.get('apellidoPaterno');
    const apellidoMaterno = this.miFormulario.get('apellidoMaterno');
    const edad = this.miFormulario.get('edad');
    const Fecha = this.miFormulario.get('Fecha');
    const curp = this.miFormulario.get('curp');
  
    if (nombre && apellidoPaterno && apellidoMaterno && edad && Fecha && curp) {
      this.datosPersonales = {
        nombre: nombre.value,
        apellidoPaterno: apellidoPaterno.value,
        apellidoMaterno: apellidoMaterno.value,
        edad: edad.value,
        Fecha: Fecha.value,
        curp: curp.value,
      };
  
      console.log('Datos Personales:', this.datosPersonales);
    } else {
      console.error('Algunas propiedades son null o undefined.');
    }
  }
}  