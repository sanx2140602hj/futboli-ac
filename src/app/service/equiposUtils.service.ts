import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquiposUtilsSelectionService {
  public equiposUtilsCategoryId: number | null = null;

  constructor() { }

  setequiposUtilsId(id: number | null) {
    this.equiposUtilsCategoryId = id;
  }

  getequiposUtilsId(): number | null {
    return this.equiposUtilsCategoryId;
  }
}
