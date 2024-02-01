import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  miFormulario: FormGroup;
datetutor: any = {}
constructor(private fb: FormBuilder) {
  this.miFormulario = this.fb.group ({


    tutor: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
  });
  }

  ngOnInit(): void {
  }

    get tutor(){
      return this.miFormulario.get('tutor');
    }
    guardarInformacion() {
    const tutor = this.miFormulario.get("tutor")
      if(tutor){
        this.datetutor = {
          tutor: tutor.value
        };
        console.log('Datos Escolares', this.datetutor);
      } else {
        console.error('El formulario no es válido.');
      }      }

    }

