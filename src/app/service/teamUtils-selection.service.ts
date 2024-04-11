import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamSelectionUtilService {
  public selectedTeamUtilsId: number | null = null;

  constructor() { }

  setSelectedId(id: number | null) {
    this.selectedTeamUtilsId = id;
  }

  getSelectedId(): number | null {
    return this.selectedTeamUtilsId;
  }
}
