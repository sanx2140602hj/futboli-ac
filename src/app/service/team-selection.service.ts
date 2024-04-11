import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamSelectionService {
  public selectedTeamId: number | null = null;

  constructor() { }

  setSelectedId(id: number | null) {
    this.selectedTeamId = id;
  }

  getSelectedId(): number | null {
    return this.selectedTeamId;
  }
}
