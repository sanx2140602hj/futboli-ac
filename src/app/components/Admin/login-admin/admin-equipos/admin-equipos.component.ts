import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-equipos',
  templateUrl: './admin-equipos.component.html',
  styleUrls: ['./admin-equipos.component.css']
})
export class AdminEquiposComponent implements OnInit {
  showRegistrarModal = false;
  showEditarModal = false;
  showEliminarModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  openRegistrarModal() {
    this.showRegistrarModal = true;
  }

  closeRegistrarModal() {
    this.showRegistrarModal = false;
  }
/* ------------------------------------------ */
  openEditarModal() {
    this.showEditarModal = true;
  }

  closeEditarModal() {
    this.showEditarModal = false;
  }
  /* ------------------------------------- */
  openEliminarModal(){
    this.showEliminarModal = true;
  }
  closeEliminarModal(){
    this.showEliminarModal = false;
  }

}
