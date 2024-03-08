import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-partidos-utils',
  templateUrl: './partidos-utils.component.html',
  styleUrls: ['./partidos-utils.component.css']
})
export class PartidosUtilsComponent implements OnInit {
  equipos: string[] = ['equipo 1', 'equipo 2']; // Lista de equipos
  jugadores: any[] = []; // Lista de jugadores, inicialmente vacía
  comentario: string = ''; // Variable para almacenar el comentario
  constructor() {}

  ngOnInit(): void {}
  selectedEquipo: string = ''; // Variable para almacenar el equipo seleccionado

  onEquipoChange(): void {
      // Lógica para actualizar la lista de jugadores según el equipo seleccionado
      if (this.selectedEquipo === '0') {
          this.jugadores = [
              { id: '00000', nombre: 'JESUS SANCHEZ HERNANDEZ' },
              { id: '00001', nombre: 'Otro jugador 1' },
              // Agrega más jugadores según sea necesario
          ];
      } else if (this.selectedEquipo === '1') {
          this.jugadores = [
              { id: '00003', nombre: 'Juan Carlos' },
              { id: '00004', nombre: 'Otro jugador 2' },
              // Agrega más jugadores según sea necesario
          ];
      } else {
          this.jugadores = []; // Limpiar la lista si no se selecciona ningún equipo
      }
  }
 /* -------------------------- */
 guardarAsistencia(jugador: any): void {
  console.log('Guardando asistencia para el jugador:', jugador);
  // Aquí puedes agregar la lógica para guardar la asistencia del jugador en tu backend o donde sea necesario
}

 /* -------------------------- */
//comentario
guardarComentario(): void {
  console.log('Comentario guardado:', this.comentario);
  // Aquí puedes agregar la lógica para guardar el comentario en tu backend o donde sea necesario
}
 /* -------------------------- */
  //DATOS
  openModalAgregarDATOS = false;
  openModalDATOS() {
    console.log('Modal Abierto DATOS');
    this.openModalAgregarDATOS = true;
  }
  closeModalDATOS() {
    console.log('Modal Cerrado DATOS');
    this.openModalAgregarDATOS = false;
  }
  /* -------------------------- */
   showSucesoModal = false;

  openSucesoModal() {
    this.showSucesoModal = true;
  }

  closeSucesoModal() {
    this.showSucesoModal = false;
  }
 /* -------------------------- */
  //EQUIPAMIENTO
  openModalEvalularEQUIPAMIENTO = false;
openModalEQUIPAMIENTO(){
  console.log('Modal Abierto EQUIPAMIENTO');
  this.openModalEvalularEQUIPAMIENTO = true;
}
closeModalEQUIPAMIENTO(){
  console.log('Modal Abierto EQUIPAMIENTO');
  this.openModalEvalularEQUIPAMIENTO = false;
}
 /* -------------------------- */
  //PORRA
  openModalEvalularPORRA = false;
openModalPORRA(){
  console.log('Modal Abierto PORRA');
  this.openModalEvalularPORRA = true;
}
closeModalPORRA(){
  console.log('Modal Abierto PORRA');
  this.openModalEvalularPORRA = false;
}
}
