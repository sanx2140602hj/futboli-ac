import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicServiceCATEGORIAS {
  public categoria: number | null = null;

  constructor() { }

  setSelectedId(id: number | null) {
    this.categoria = id;
    console.log("El id lo tiene el servicio: ", this.categoria);
  }

  getSelectedId(): number | null {
    console.log("Enviamos el: ", this.categoria);
    return this.categoria;
  }
  
}

