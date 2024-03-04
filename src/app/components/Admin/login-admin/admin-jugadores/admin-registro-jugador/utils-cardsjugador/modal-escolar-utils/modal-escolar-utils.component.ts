import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal-escolar-utils',
  templateUrl: './modal-escolar-utils.component.html',
  styleUrls: ['./modal-escolar-utils.component.css']
})
export class ModalEscolarUtilsComponent implements OnInit {
  miFormulario: FormGroup;
  datosEscolares: any = {}; // Objeto para almacenar la información escolar

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      escolaridad: ['', Validators.required],
      escuela: ['', [Validators.required]],
      grado: ['', Validators.required],
      grupo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    });
  }

  ngOnInit(): void {
  }

  // Método para obtener los controles del formulario
  get escolaridad() {
    return this.miFormulario.get('escolaridad');
  }

  get escuela() {
    return this.miFormulario.get('escuela');
  }

  get grado() {
    return this.miFormulario.get('grado');
  }

  get grupo() {
    return this.miFormulario.get('grupo');
  }

  // Método para guardar la información
  guardarInformacion() {
    const escolaridad = this.miFormulario.get('escolaridad')
    const escuela = this.miFormulario.get('escuela')
    const grado = this.miFormulario.get('grado')
    const grupo = this.miFormulario.get('grupo')

    if (escolaridad && escuela && grado && grupo) {
      this.datosEscolares = {
        escolaridad: escolaridad.value,
        escuela: escuela.value,
        grado: grado.value,
        grupo: grupo.value
      };
      //Mensaje personalizado
      const mensaje = `Escolaridad: ${this.datosEscolares.escolaridad}\n,` +
        `Escuela: ${this.datosEscolares.escuela}\n.` +
        `Grado: ${this.datosEscolares.grado}\n,` +
        `Grupo: ${this.datosEscolares.grupo}.`;
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: mensaje,
        icon: 'success',
        timer: 2500,
        showConfirmButton: false,

      });
      console.log('Datos Escolares', this.datosEscolares);
    } else {
      console.error('El formulario no es válido.');
    }
  }
}
