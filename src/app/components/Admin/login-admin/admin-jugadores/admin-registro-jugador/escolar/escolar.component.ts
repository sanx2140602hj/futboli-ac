import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escolar',
  templateUrl: './escolar.component.html',
  styleUrls: ['./escolar.component.css']
})
export class EscolarComponent implements OnInit {
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

      console.log('Datos Escolares', this.datosEscolares);
    } else {
      console.error('El formulario no es válido.');
    }
  }
}
