import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-partidos-utils',
  templateUrl: './partidos-utils.component.html',
  styleUrls: ['./partidos-utils.component.css']
})
export class PartidosUtilsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
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
