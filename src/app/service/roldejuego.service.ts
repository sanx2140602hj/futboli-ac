import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartidoSelectionService {
  public selectedPartidoId: number | null = null;

  constructor() { }

  setSelectedId(id: number | null) {
    this.selectedPartidoId = id;
  }

  getSelectedId(): number | null {
    return this.selectedPartidoId;
  }
  
}

