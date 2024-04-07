import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaSelectionService {
  private selectedId: number | null = null;

  constructor() { }

  setSelectedId(id: number): void {
    this.selectedId = id;
  }

  getSelectedId(): number | null {
    return this.selectedId;
  }
}
