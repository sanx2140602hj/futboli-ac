import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicServiceTABLAS {
  public tablas: number | null = null;

  constructor() { }

  setSelectedId(id: number | null) {
    this.tablas = id;
    console.log("El id lo tiene el servicio: ", this.tablas);
  }

  getSelectedId(): number | null {
    console.log("Enviamos el: ", this.tablas);
    return this.tablas;
  }
  
}

