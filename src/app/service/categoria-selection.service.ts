import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaSelectionService {
  public selectedCategoryId: number | null = null;

  constructor() { }

  setSelectedId(id: number | null) {
    this.selectedCategoryId = id;
  }

  getSelectedId(): number | null {
    return this.selectedCategoryId;
  }
  
}
