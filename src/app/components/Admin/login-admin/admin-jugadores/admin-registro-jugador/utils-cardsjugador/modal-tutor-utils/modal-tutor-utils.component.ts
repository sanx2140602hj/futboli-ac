import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/modal.service'; // Importa el servicio

@Component({
  selector: 'app-modal-tutor-utils',
  templateUrl: './modal-tutor-utils.component.html',
  styleUrls: ['./modal-tutor-utils.component.css']
})
export class ModalTutorUtilsComponent implements OnInit {
  miFormulario: FormGroup;
  datetutor: any = {}

  // Inyecta el servicio ModalService
  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.miFormulario = this.fb.group({
      tutor: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    });
  }

  ngOnInit(): void {}

  get tutor() {
    return this.miFormulario.get('tutor');
  }

  guardarInformacion() {
    const tutor = this.miFormulario.get("tutor");
    if (tutor && tutor.valid) {
      this.datetutor = {
        tutor: tutor.value
      };
      console.log('Datos Tutor', this.datetutor);
      // Aquí deberías guardar la información en tu base de datos u otro lugar apropiado
  
      // Marca la información como guardada en el servicio
      this.modalService.setInformacionGuardada(true);
    } else {
      console.error('El formulario no es válido.');
    }
  }
  

  abrirOtroModal() {
    // Verifica si la información está guardada antes de abrir otro modal
    if (this.modalService.isInformacionGuardada()) {
      // Abre otro modal
    } else {
      console.log('Hey, primero guarda la información.');
    }
  }
}
