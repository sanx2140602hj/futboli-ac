import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-equipos-utils',
  templateUrl: './equipos-utils.component.html',
  styleUrls: ['./equipos-utils.component.css']
})
export class EquiposUtilsComponent implements OnInit {
  
  showDirectorModal = false;
  showPresidenteModal = false;
  showEditarModal = false;
  showEliminarModal = false;

  constructor() { }

  ngOnInit(): void { 
  }
  openDirectorModal(){
    this.showDirectorModal = true;
  }
  closeDirectorModal() {
    this.showDirectorModal = false;
  }
  /* ------------------------------------------------- */
  openPresidenteModal(){
    this.showPresidenteModal = true;
  }
  closePresidenteModal(){
    this.showPresidenteModal = false;
  }
  /* ------------------------------------------------- */
  openEditarModal(){
    this.showEditarModal = true
  }
  closeEditarModal(){
    this.showEditarModal = false
  }
  /* ------------------------------------- */
  openEliminarModal(){
    this.showEliminarModal = true;
  }
  closeEliminarModal(){
    this.showEliminarModal = false;
  }
}
