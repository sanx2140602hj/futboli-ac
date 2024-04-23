import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorSelectionService {
  [x: string]: any;
  public jugador: number | null = null;

  constructor() { }

  setSelectedId(id: number | null) {
    this.jugador = id;
    console.log("El id lo tiene el servicio: ", this.jugador);
  }

  getSelectedId(): number | null {
    console.log("Enviamos el: ", this.jugador);
    return this.jugador;
  }
  
}

