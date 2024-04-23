import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TorneoSelectionService {
  public selectedTorneoId: number | null = null;

  constructor() { }

  setSelectedId(id: number | null) {
    this.selectedTorneoId = id;
    console.log("El id lo tiene el servicio: ", this.selectedTorneoId);
  }

  getSelectedId(): number | null {
    console.log("Enviamos el: ", this.selectedTorneoId);
    return this.selectedTorneoId;
  }
  
}

