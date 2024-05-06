import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { JugadorSelectionService } from '../../../../../../service/cardId.service';



@Component({
  selector: 'app-modal-eliminar-jugador-utils',
  templateUrl: './modal-eliminar-jugador-utils.component.html',
  styleUrls: ['./modal-eliminar-jugador-utils.component.css']
})
export class ModalEliminarJugadorUtilsComponent{
  constructor(private http: HttpClient, private jugadorSelectionService: JugadorSelectionService, private router: Router) {}
  @Input() jugador: number | null = null; // Recibir el ID de la categoría como entrada
  IDjugador: number | null = null; // Variable para almacenar el ID del jugador sin formato
  palabraClave: string = '';

  data: any = {};
  eliminardatos: any = {};
  IDprueba: any = {};
  checkboxChecked = false;
  categoriaEliminar: string = '';
  error: boolean = false; // Variable para controlar si hay error

  @Output() onCloseModal = new EventEmitter<void>();
  ngOnInit() {
    this.IDjugador = this.jugadorSelectionService.getSelectedId();
    console.log('Jornadas para el id, (intento 2): ', this.IDjugador);
  }

  guardarCambios() {
    /*⚠️⚠️ aqui cambiar 'dad' por variable de BD ⚠️⚠️ */
    console.log('Editar de la categoría con ID:', this.IDjugador);

    if (this.categoriaEliminar == "Confirmo" || "confirmo" || "Confirmo " || "confirmo " || "CONFIRMO") {
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
          `http://localhost:3000/jugadores/delete/ ${this.IDjugador}`
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
      this.closeModal(); // Cerrar el modal después de guardar los cambios
      Swal.fire({
        position: 'top-end',
        title: 'Eliminado con éxito',
        icon: 'info',
        iconColor: 'red',
        timer: 1500,
        showConfirmButton: false,
      });
      this.router.navigate(['/Admin-Jugadores']);
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

}
