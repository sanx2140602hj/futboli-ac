import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { TorneoSelectionService } from '../../../../../../service/torneo-selection.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-eliminar-torneo',
  templateUrl: './modal-eliminar-torneo.component.html',
  styleUrls: ['./modal-eliminar-torneo.component.css']
})
export class ModalEliminarTorneoComponent {
  @Input() torneoId: number | null = null; // Recibir el ID del torneo como entrada
  
  constructor( private router: Router, private http: HttpClient,private torneoSelectionService: TorneoSelectionService) {
  }
  data: any = {};
  categoriaEliminar: string = '';
  error: boolean = false; // Variable para controlar si hay error
  palabraClave: string = '';
  checkboxChecked = false;

  @Output() onCloseModal = new EventEmitter<void>();

  ngOnInit(){
    this.torneoId = this.torneoSelectionService.getSelectedId();
    console.log("Modal de Jornadas para el id, (intento 1): ", this.torneoId)
    this.fetchGetTorneo();
  }

  guardarCambios() {
    /*⚠️⚠️ aqui cambiar 'dad' por variable de BD ⚠️⚠️ */
    console.log('Editar de la categoría con ID:', this.torneoId);

    if (this.categoriaEliminar.trim() === this.palabraClave.trim()) {
      console.log('Nombre del torneo:', this.categoriaEliminar);
         // Aquí iría la lógica para conectar con la base de datos y eliminar la categoría
      console.log(
        'Nombre del equipo:',
        this.checkboxChecked,
        this.categoriaEliminar
      );
      /*  */
      // Utilizar fetch para enviar los datos
      this.http
        .delete<any>(
          `http://localhost:3000/torneos/delete/${this.torneoId}`
        )
        .subscribe(
          (response) => {
            console.log('Respuesta del servidor:', response);
          },
          (error) => {
            console.error('Error en la solicitud:', error);
            // Agregar la lógica para manejar el error
          }
        );

      /*  */
      this.router.navigate(['/Admin-RolesdeJuegos']);

      this.closeModal(); // Cerrar el modal después de guardar los cambios
      Swal.fire({
        position: 'top-end',
        title: 'Eliminado con éxito',
        icon: 'info',
        iconColor: 'red',
        timer: 1500,
        showConfirmButton: false,
      });
      //this.router.navigate(['/Admin-Jugadores']);
    } else {
      this.error = true; // Establecer la variable de error como verdadera
      Swal.fire({
        position: 'top-end',
        title: 'Verifica la informacion',
        icon: 'question',
        iconColor: 'orange',
        timer: 2500,
        showConfirmButton: false,
      });
    }
  }

  closeModal() {
    console.log('Modal de eliminación cerrado');
    this.onCloseModal.emit();
  }

  fetchGetTorneo() {
    // Realizar la solicitud GET para obtener los datos del torneo
    this.http.get<any[]>(`http://localhost:3000/torneos/receive/play/${this.torneoId}`)
      .subscribe(
        (data) => {
          console.log('Datos del torneo:', data);
          if (data && data.length > 0) {
            this.data = data[0]; // Tomar el primer elemento del array
            this.palabraClave = this.data.nombre; // Asignar el nombre del torneo como palabra clave
          } else {
            console.error('No se encontraron datos para el torneo con ID:', this.torneoId);
          }
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
  }
  
}
