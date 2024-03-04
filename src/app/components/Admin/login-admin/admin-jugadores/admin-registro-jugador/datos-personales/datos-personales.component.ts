import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

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
      genero: ['', Validators.required], // Agregado para el género
      fecha: ['', Validators.required], // Agregado para la fecha de nacimiento
            curp: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9\s]+')]],
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


  get genero() {
    return this.miFormulario.get('genero');
  }
  
  get fecha() {
    return this.miFormulario.get('fecha');
  }

  get curp(){
    return this.miFormulario.get('curp')
  }

  // Método para guardar la información
  guardarInformacion() {
    const nombre = this.miFormulario.get('nombre');
    const apellidoPaterno = this.miFormulario.get('apellidoPaterno');
    const apellidoMaterno = this.miFormulario.get('apellidoMaterno');
    const genero = this.miFormulario.get('genero');
    const fecha = this.miFormulario.get('fecha');
    const curp = this.miFormulario.get('curp');
  
    if (nombre && apellidoPaterno && apellidoMaterno && genero && fecha && curp) {
      this.datosPersonales = {
        nombre: nombre.value,
        apellidoPaterno: apellidoPaterno.value,
        apellidoMaterno: apellidoMaterno.value,
        genero: genero.value,
        fecha: fecha.value,
        curp: curp.value,
      };
  
      const mensaje = `Nombre: ${this.datosPersonales.nombre}\n` +
                      `Apellido paterno: ${this.datosPersonales.apellidoPaterno}\n` +
                      `Apellido materno: ${this.datosPersonales.apellidoMaterno}\n` +
                      `Género: ${this.datosPersonales.genero}\n` +
                      `Fecha de Nacimiento: ${this.datosPersonales.fecha}\n` +
                      `CURP: ${this.datosPersonales.curp}.`;
  
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: mensaje,
        icon: 'success',
        timer: 2500,
        showConfirmButton: false,
      });
  
      console.log('Datos Personales:', this.datosPersonales);
    } else {
      console.error('Algunas propiedades son null o undefined.');
    }
  }
  
}  