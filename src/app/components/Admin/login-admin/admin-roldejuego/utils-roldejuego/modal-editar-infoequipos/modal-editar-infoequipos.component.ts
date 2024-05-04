import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TorneoSelectionService } from '../../../../../../service/torneo-selection.service';
import { HttpClient } from '@angular/common/http';
import { time } from 'console';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-modal-editar-infoequipos',
  templateUrl: './modal-editar-infoequipos.component.html',
  styleUrls: ['./modal-editar-infoequipos.component.css']
})
export class ModalEditarInfoequiposComponent {
  @Input() torneoId: number | null = null; // Recibir el ID de la categoría como entrada
  //selectedTorneoId: number | null = null; // Variable para almacenar el ID de la categoría seleccionada
  //selectedRow: HTMLElement | null = null; // Variable para almacenar la fila seleccionada
  selectedTorneoId: number | null = null; // Nueva variable para almacenar el ID de la categoría para el modal de edición

  miFormulario: FormGroup;
  datePartido: any = {};
  getTorneo: any[] = [];

  constructor(private fb: FormBuilder,private http: HttpClient,private torneoSelectionService: TorneoSelectionService) {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
    });
  }
  ngOnInit(){
    this.torneoId = this.torneoSelectionService.getSelectedId();
    console.log("Modal de Jornadas para el id, (intento 1): ", this.torneoId)
    this.fetchGetTorneo();
  }
  get nombre() {
    return this.miFormulario.get('nombre');
  }

  @Output() onCloseModal = new EventEmitter<void>();


//
  fetchGetTorneo() {
    this.http.get<any[]>(`http://localhost:3000/torneos/receive/play/${this.torneoId}`)
      .subscribe(data => {
        console.log('Datos de la tabla categorias:', data);
        this.getTorneo = data;
        console.log("datos de html MODAL⭐ ",this.getTorneo);
        
        // Establecer los valores en el formulario
        if (this.getTorneo.length > 0) {
          const primerTorneo = this.getTorneo[0]; // Suponiendo que solo necesitas el primer elemento
          const fechaInicioFormateada = formatDate(primerTorneo.fechaInicio, 'yyyy-MM-dd', 'en-US');
          const fechaFinFormateada = formatDate(primerTorneo.fechaFin, 'yyyy-MM-dd', 'en-US');
          
          this.miFormulario.patchValue({
            nombre: primerTorneo.nombre,
            fechaInicio: fechaInicioFormateada,
            fechaFin: fechaFinFormateada
          });
        }
  
      }, error => {
        console.error('Error en la solicitud:', error);
      });
  }
  

  Guardar() {
    const nombre = this.miFormulario.get('nombre');
  const fechaInicio = this.miFormulario.get('fechaInicio');
  const fechaFin = this.miFormulario.get('fechaFin');

    if (nombre && nombre.valid && fechaInicio && fechaFin && fechaInicio.valid && fechaFin.valid) {
      this.datePartido = {
        nombre: nombre.value,
        fechaInicio: fechaInicio.value,
        fechaFin: fechaFin.value
      };

      console.log('Datos del partido:', this.datePartido); // Enviamos los datos del partido a la consola
    this.guardarEnBD();
      this.onCloseModal.emit();

      
      Swal.fire({
        position: "top-end",
        title: 'Generado con éxito',
text:"Perfecto",
        icon: 'success',
        timer: 2500,
        showConfirmButton: false,
      });
    } else {
      console.log('Error: No se puede guardar el partido debido a errores en el formulario');

      // Mostrar SweetAlert2 si la operación no se realizó correctamente
      Swal.fire({
        position: 'top-end',
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de que el formulario esté completo y sin errores',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,
      });
    }
  }
guardarEnBD(){
  const dataParaEnviar = JSON.stringify(this.datePartido);

  fetch(`http://localhost:3000/torneos/replace/all/${this.torneoId}`, {
    method: 'PATCH',
    body: dataParaEnviar,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText} `);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Respuesta del servidor:', data);
      console.log('entro al servidor:', data);
      this.onCloseModal.emit();
      // Aquí puedes agregar la lógica para manejar la respuesta del servidor
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
      // Aquí puedes agregar la lógica para manejar el error
    });
}
  closeModal() {
    console.log('Modal de edición cerrado');
    this.onCloseModal.emit();
  }
}