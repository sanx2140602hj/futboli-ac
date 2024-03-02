import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-modal-tutor-utils',
  templateUrl: './modal-tutor-utils.component.html',
  styleUrls: ['./modal-tutor-utils.component.css']
})
export class ModalTutorUtilsComponent implements OnInit {
  miFormulario: FormGroup;
  datetutor: any = {}
  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({


      tutor: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    });
  }

  ngOnInit(): void {
  }

  get tutor() {
    return this.miFormulario.get('tutor');
  }
  guardarInformacion() {
    const tutor = this.miFormulario.get("tutor")
    if (tutor) {
      this.datetutor = {
        tutor: tutor.value
      };
      console.log('Datos Escolares', this.datetutor);
    } else {
      console.error('El formulario no es válido.');
    }
  }

}
